import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { setStore } from "../../common/utils/localStorageHelper";
import { useAuth } from "../../context/authContext";
import { LoginModel } from "./types";
import { UserOutlined } from "@ant-design/icons";
import { Checkbox, Input, Space } from "antd";
import { Link } from "react-router-dom";
import "@benovshe/sasslibrary/dist/index.css";
import google from "../../images/Google svg.png";
import fb from "../../images/Facebook svg.png";
import insta from "../../images/Instagram svg.png";
import rectangle from "../../images/login.png";
import recMob from "../../images/rectMob.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { loginAuth, logoutAuth } = useAuth();
  const navigate = useNavigate();
  const result = useAppSelector((state) => state.auth.result);
  // const dispatch = useAppDispatch();

  useEffect(() => {
    if (result.status === "succeeded") {
      setStore("token", result.token);
      navigate("/");
    }
  }, [result]);

  const handleSubmit = (values: LoginModel) => {
    loginAuth(values.username, values.password);
    // const result = encryptData("Pro247!!");
    // console.log(result);
    // console.log("-----------");
    // const restVal = decryptData(result);
    // console.log(restVal);
  };

  useEffect(() => {
    logoutAuth(); // storage silinecek :)
  }, []);
  function onSubmit() {
    navigate("/");
  }
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
        className={
          responsive
            ? "log d-f justify-content-center align-items-center "
            : "mobLogin d-f justify-content-center align-items-center"
        }
      >
        <div style={{ width: "339px" }} className="m-3 d-f fd-column g-2">
          <div className={responsive ? "fs-xl fw-700 " : "fs-lg fw-700"}>
            Log in
          </div>
          <div
            className={
              responsive ? "d-f fd-column w-100 g-2  " : "d-f fd-column w-100"
            }
          >
            <div>
              <span className="fs-14">Mail or Username</span>
              <Input
                size="large"
                placeholder="Enter your mail or username"
                suffix={<UserOutlined />}
              />
            </div>
            <div>
              <span className="fs-14">Password</span>
              <Space direction="vertical">
                <Space direction="horizontal" align="center">
                  <Input.Password
                    className={responsive ? "pasWeb" : "pasMob w-100"}
                    size="large"
                    style={{ width: "339px" }}
                    placeholder="Enter your password"
                    visibilityToggle={{
                      visible: passwordVisible,
                      onVisibleChange: setPasswordVisible,
                    }}
                  />
                </Space>
              </Space>
            </div>
          </div>
          <div className="d-f justify-content-sb">
            <Checkbox className="fs-sm">Remember Me</Checkbox>
            <Link to="/forgot" className="text-dec-none text-dark fs-sm">
              {" "}
              Forgot Password?
            </Link>
          </div>
          <div className="w-100 mb-1">
            <button
              className="btn bg-primary text-light w-100 fs-xs"
              style={{ height: "48px" }}
              onClick={onSubmit}
            >
              Log In
            </button>
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
        </div>
      </div>
      <div className="d-sm-none">
        <div className="position-absolute fs-20 text-light m-2 w-10">
          Welcome, Looks like you’re new here!
        </div>
        <img src={responsive ? rectangle : recMob} alt="" />
      </div>
    </div>
  );
};

export default Login;
