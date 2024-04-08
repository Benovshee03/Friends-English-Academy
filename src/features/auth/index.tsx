import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Checkbox, Input, Space } from "antd";
import { Link } from "react-router-dom";
import "@benovshe/sasslibrary/dist/index.css";
import google from "../../images/Google svg.png";
import fb from "../../images/Facebook svg.png";
import insta from "../../images/Instagram svg.png";
import rectangle from "../../images/login.png";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="smContainer d-f mt-3 mb-3">
      <div
        style={{
          height: "795px",
          borderRadius: "0px 8px 8px 0px",
          background: " var(--Foundation-Red-Light, #F6EAEB)",
        }}
        className="d-f justify-content-center align-items-center "
      >
        <div style={{ width: "339px" }} className="m-3 d-f fd-column g-2">
          <div className="fs-xl fw-700">Log in</div>
          <div className="w-100">
            <Input 
              size="large"
              placeholder="Enter your mail or username"
              suffix={<UserOutlined />}
            />
            <Space direction="vertical" className="w-100" >
              <Space direction="horizontal" align="center">
                <Input.Password
                  placeholder="Enter your password"
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />
              </Space>
            </Space>
          </div>
          <div>
            <Checkbox className="fs-sm">Remember Me</Checkbox>
            <Link to="/forgot" className="text-dec-none text-dark fs-sm">
              {" "}
              Forgot Password?
            </Link>
          </div>
          <div>
            <button className="btn bg-primary text-light">Log In</button>
          </div>
          <div>
            <div>
              <div></div>
              <div className="fs-14 fw-500">Or continue with</div>
              <div></div>
            </div>
            <div className="d-f">
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
            <div className="fs-14 d-f">
              <div>Don’t have an Accoount?</div>
              <Link to="/register" className="text-dec-none">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="position-absolute fs-20 text-light m-2 w-10">
          Welcome, Looks like you’re new here!
        </div>
        <img src={rectangle} alt="" />
      </div>
    </div>
  );
};

export default Login;
