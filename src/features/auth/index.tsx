

import React, { useEffect, useState } from "react";
import rules from "./index.validation";
import { LoginModel } from "./types";
import { Form, FormInstance, Checkbox, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAuth } from "../../context/authContext";
import { useAppSelector } from "../../app/hooks";
import { setStore } from "../../common/utils/localStorageHelper";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import google from "../../images/Google svg.png";
import fb from "../../images/Facebook svg.png";
import insta from "../../images/Instagram svg.png";
import rectangle from "../../images/login.png";
import recMob from "../../images/rectMob.png";
export default function Login() {
  const { loginAuth } = useAuth();
  const navigate = useNavigate();
  const result = useAppSelector((state) => state.auth.result);
  console.log(result);
  useEffect(() => {
    if (result.status === "succeeded") {
      setStore("token", result.token);
      navigate("/");
    }
  }, [result]);

  const handleSubmit = (values: LoginModel) => {
    loginAuth(values.username, values.password);

  };



  const formRef = React.createRef<FormInstance>();
  const FormItem = Form.Item;
  const [responsive, setResponsive] = useState(window.innerWidth > 480);
  useEffect(() => {
    function handleResize() {
      setResponsive(window.innerWidth <= 480);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    function handleResize() {
      setResponsive(window.innerWidth <= 480);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [result]);
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
        className={
          responsive
            ? "log d-f justify-content-center align-items-center "
            : "mobLogin d-f justify-content-center align-items-center"
        }
      >
        <Form
          className="login-form m-3 d-f fd-column g-2"
          style={{ width: "339px" }}
          onFinish={handleSubmit}
          ref={formRef}
        >
          <div className={responsive ? "fs-xl fw-700 " : "fs-lg fw-700"}>
            Log in
          </div>

          <FormItem name={"username"} rules={rules.username}>
            <Input
              placeholder="Username"
              prefix={<UserOutlined style={{ color: "rgb(0,0,0,0.25)" }} />}
              size="large"
            />
          </FormItem>

          <FormItem name={"password"} rules={rules.password}>
            <Input.Password
              className={responsive ? "pasWeb" : "pasMob w-100"}
              placeholder="Password"
              prefix={<LockOutlined style={{ color: "rgb(0,0,0,0.25)" }} />}
              size="large"
              type="password"
            />
          </FormItem>
          <Button
            block
            htmlType="submit"
            className="btn bg-primary text-light w-100 fs-xs"
            style={{ height: "48px" }}
            
          >
            Log In
          </Button>
          <div className="d-f justify-content-sb">
          <Checkbox className="fs-sm">Remember Me</Checkbox>
          <Link to="/forgot" className="text-dec-none text-dark fs-sm">
            Forgot Password?
          </Link>
        </div>
        <div className="d-f fd-column align-items-center g-1 ">
          <div className="d-f align-items-center g-2">
            <div
              style={{
                width: "76px",
                height: "1px",
                background: "rgba(29, 15, 95, 0.20)",
              }}
            ></div>
            <div className={responsive ? "fs-14 fw-500" : "fs-sm fw-600"}>
              Or continue with
            </div>
            <div
              style={{
                width: "76px",
                height: "1px",
                background: "rgba(29, 15, 95, 0.20)",
              }}
            ></div>
          </div>
          <div className="d-f g-3">
            <div>
              <img src={google} alt="social media" />
            </div>
            <div>
              <img src={fb} alt="social media" />
            </div>
            <div>
              <img src={insta} alt="social media" />
            </div>
          </div>
          <div className="fs-14 d-f g-1">
            <div>Don’t have an Account?</div>
            <Link to="/register" className="text-dec-none">
              Sign Up
            </Link>
          </div>
        </div>
        </Form>

      </div>
      <div className="d-sm-none">
        <div className="position-absolute fs-20 text-light m-2 w-10">
          Welcome, Looks like you’re new here!
        </div>
        <img src={responsive ? rectangle : recMob} alt="" />
      </div>
    </div>
  );
}
