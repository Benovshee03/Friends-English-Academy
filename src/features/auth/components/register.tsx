import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import {  Button, Form, Input, Space } from "antd";
import { Link } from "react-router-dom";
import "@benovshe/sasslibrary/dist/index.css";
import rectangle from "../../../images/login.png";
import recMob from "../../../images/rectMob.png";
import { UserAppDispatch } from "../../../app/hooks";
import FormItem from "antd/es/form/FormItem";


interface RegisterProps{
  onFinish: (values: any) => void;
  initialValues?: any;
  isEdit?: boolean;
}
const Register :React.FC<RegisterProps> =(props) => {
  const navigate = useNavigate();
  const dispatch = UserAppDispatch();
  useEffect(() => {
  }, [dispatch]);
  const { onFinish, initialValues, isEdit } = props;
  const [form] = Form.useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [responsive, setResponsive] = useState(window.innerWidth>480);
  useEffect(() => {
    function handleResize() {
      setResponsive(window.innerWidth <= 480);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    form.resetFields();
    function handleResize() {
      setResponsive(window.innerWidth <= 480);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initialValues]); 
  return (
    <div className={responsive? "smContainer d-f mt-3 mb-3" : "container-sm d-f fd-column align-items-center"}>
                  <div className="d-none mt-2 mb-2 d-sm-block">
        <div className={responsive ? "position-absolute fs-20 text-light m-2 w-10" : "position-absolute fs-14 text-light m-2 w-20"}>
          Welcome, Looks like you’re new here!
        </div>
        <img src={responsive ? rectangle :recMob} alt="imagerec" />
      </div>
      <div
        style={{
          // height: "795px",
          borderRadius: "0px 8px 8px 0px",
          background: " var(--Foundation-Red-Light, #F6EAEB)",
        }}
        className={responsive ? "log d-f justify-content-center align-items-center " : "mobLogin d-f justify-content-center align-items-center"}
      >
        <div   style={{ width: "339px" }} 

        className="m-3 d-f fd-column g-2">
          <div className={responsive ? "fs-xl fw-700 " : "fs-lg fw-700"}>Sign Up</div>
          <Form form={form}
                  onFinish={onFinish}
                  initialValues={initialValues}
           className={responsive? "d-f fd-column w-100 g-2  " : "d-f fd-column w-100"}>
            <div>
              <span className="fs-14">Full Name</span>
            <Input
            //  rules={[{requires:true}]}
              size="large"
              placeholder="Enter your Name"
              suffix={<UserOutlined />}
            />
            </div>
            <div>
              <span className="fs-14">Mail Adress</span>
            <Input 
              size="large"
              placeholder="Enter your mail adress"
              suffix={<UserOutlined />}
            />
            </div>
            <div>
              <span className="fs-14">Password</span>
            <Space direction="vertical"  >
              <Space direction="horizontal" align="center">
              {!isEdit && (
              <FormItem
              name={"password"}
              label="Password"
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
                style={{width:"339px"}}
                  placeholder="Enter your password"
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />
              </FormItem>

                )}
              </Space>
            </Space>
            </div>
            <div className="w-100 mb-1" >
            <Button htmlType="submit" className="btn bg-primary text-light w-100 fs-xs" style={{height:"48px"}}>Sign Up</Button>
          </div>
          </Form>

          <div className="d-f fd-column align-items-center g-1 ">
            <div className="fs-14 d-f g-1">
              <div>Already have an Account?</div>
              <Link to="/login" className="text-dec-none">
                Log In
              </Link>
            </div>
          </div>
        </div>
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
