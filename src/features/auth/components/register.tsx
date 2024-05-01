import React, { useState, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "@benovshe/sasslibrary/dist/index.css";
import rectangle from "../../../images/login.png";
import recMob from "../../../images/rectMob.png";
import { UserAppDispatch, useAppSelector } from "../../../app/hooks";
import { setStore } from "../../../common/utils/localStorageHelper";
import { RegisterModel } from "../types";
import { useAuth } from "../../../context/authContext";
import authRegister from "../authSlice";


// const FormComponent: React.FC<FormComponentProps> = (props) => {



interface RegisterProps {
  onFinish: (values: any) => void;
  initialValues?: any;
  isEdit?: boolean;
}

const Register: React.FC<RegisterProps> = ({ onFinish, isEdit }) => {
  // const { registerAuth } = useAuth();
  // const navigate = useNavigate();
  // const dispatch = UserAppDispatch();

  // const result = useAppSelector((state) => state.auth.result);


  // useEffect(() => {
  //   form.resetFields();
  // }, []);

  // useEffect(() => {
  //   if (result?.status === "succeeded") {
  //     setStore("token", result.token);
  //     navigate("/login"); // Başarılı kayıttan sonra login sayfasına yönlendirme
  //   }
  // }, [result, navigate]);
  const { registerAuth} = useAuth();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const result = useAppSelector((state) => state.auth.result);
  console.log(result);
  useEffect(() => {
    if (result.status === "succeeded") {
      setStore("token", result.token);
      navigate("/admin/login");
    }
  }, [result]);
  const handleSubmit = (values: RegisterModel) => {
    registerAuth(values.username, values.password,values.lastname,values.email,values.password);
  };

  const [responsive, setResponsive] = useState(window.innerWidth > 480);
  useEffect(() => {
    function handleResize() {
      setResponsive(window.innerWidth <= 480);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div
      className={
        responsive
          ? "smContainer d-f mt-3 mb-3"
          : "container-sm d-f fd-column align-items-center"
      }
    >
      <div className="d-none mt-2 mb-2 d-sm-block">
        <div
          className={
            responsive
              ? "position-absolute fs-20 text-light m-2 w-10"
              : "position-absolute fs-14 text-light m-2 w-20"
          }
        >
          Welcome, Looks like you’re new here!
        </div>
        <img src={responsive ? rectangle : recMob} alt="imagerec" />
      </div>
      <div
        style={{
          borderRadius: "0px 8px 8px 0px",
          background: " var(--Foundation-Red-Light, #F6EAEB)",
        }}
        className={
          responsive
            ? "log d-f justify-content-center align-items-center "
            : "mobLogin d-f justify-content-center align-items-center"
        }
      >
        <Form
          form={form}
          onFinish={handleSubmit}
          className={
            responsive ? "d-f fd-column w-100 g-2  " : "d-f fd-column w-100"
          }
        >
          <div className={responsive ? "fs-xl fw-700 " : "fs-lg fw-700"}>
            Sign Up
          </div>
          <Form.Item name={"username"} rules={[{ required: true }]}>
            <Input
              size="large"
              placeholder="Enter your username"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item name={"firstname"} rules={[{ required: true }]}>
            <Input
              size="large"
              placeholder="Enter your First Name"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item name={"lastname"} rules={[{ required: true }]}>
            <Input
              size="large"
              placeholder="Enter your Last Name"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item name={"email"} rules={[{ required: true }]}>
            <Input
              size="large"
              placeholder="Enter your email address"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          {!isEdit && (
            <Form.Item
              name={"password"}
              rules={[
                { required: true, message: "Please input your password." },
                { min: 8, message: "Password must be minimum 8 characters." },
                {
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message:
                    "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.",
                },
              ]}
            >
              <Input.Password
                size="large"
                style={{ width: "339px" }}
                placeholder="Enter your password"
              />
            </Form.Item>
          )}
          <Form.Item>
            <Button
              htmlType="submit"
              className="btn bg-primary text-light w-100 fs-xs"
              style={{ height: "48px" }}
            >
              Sign Up
            </Button>
          </Form.Item>
          <div className="d-f fd-column align-items-center g-1 ">
            <div className="fs-14 d-f g-1">
              <div>Already have an Account?</div>
              <Link to="/login" className="text-dec-none">
                Log In
              </Link>
            </div>
          </div>
        </Form>
      </div>
      <div className="d-sm-none">
        <div className="position-absolute fs-20 text-light m-2 w-10">
          Welcome, Looks like you’re new here!
        </div>
        <img src={rectangle} alt="" />
      </div>
    </div>
  );
};

export default Register;
