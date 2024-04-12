import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import {  Input, Space } from "antd";
import { Link } from "react-router-dom";
import "@benovshe/sasslibrary/dist/index.css";
import rectangle from "../../images/login.png";
const Register = () => {
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
          <div className="fs-xl fw-700">Sign Up</div>
          <div className="d-f fd-column w-100 g-2">
            <div>
              <span className="fs-14">Full Name</span>
            <Input 
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
                <Input.Password
                size="large"
                style={{width:"339px"}}
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
          <div className="w-100 mb-1" >
            <button className="btn bg-primary text-light w-100 fs-xs" style={{height:"48px"}}>Sign Up</button>
          </div>
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
      <div>
        <div className="position-absolute fs-20 text-light m-2 w-10">
          Welcome, Looks like you’re new here!
        </div>
        <img src={rectangle} alt="" />
      </div>
    </div>
  );
};

export default Register;
