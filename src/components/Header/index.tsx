import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "@benovshe/sasslibrary/dist/index.css";
import logo from "../../images/newlogo.png";
import logoMobile from "../../images/logoMobile.png";
import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown, Menu } from "antd";
import { useAuth } from "../../context/authContext";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../app/hooks";
import {
  setStore,
  removeStore,
} from "../../../src/common/utils/localStorageHelper";
import menu from "../../images/menu.png";
import profile from "../../../src/images/profile.png"


const Header = () => {
  const navigate = useNavigate();
  function onClickToLogo() {
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

  const { logoutAuth } = useAuth();
  const result = useAppSelector((state) => state.auth.result);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const username = useAppSelector((state) =>
  state.auth.result.status === "succeeded" ? state.auth.result.username : ""
);
console.log(username);

  useEffect(() => {
    if (result.status === "succeeded") {
      setStore("token", result.token);
      setIsLoggedIn(false);
    } else {
      removeStore("token");
      setIsLoggedIn(true);
    }
  }, [result]);

  const handleLogout = () => {
    logoutAuth();
    setIsLoggedIn(true);
    navigate("/admin/login")
  };

  return (
    <div
      style={{
        borderBottom:
          "1px solid var(--foundation-red-light-hover, #F6DDE1)",
      }}
    >
      <div
        className={
          responsive
            ? "container d-f"
            : "container-sm d-f justify-content-sa "
        }
        style={{
          justifyContent: "space-between",
          height: responsive ? "111px" : "56px",
          alignItems: "center",
        }}
      >
        <div className="d-none d-sm-flex">
          <img src={menu} alt="hamburger menu" />
        </div>
        <div className="d-sm-flex logo" onClick={onClickToLogo}>
          <img src={logo} alt="logo" className="d-xxl-flex d-sm-none" />
          <img
            src={logoMobile}
            alt="logo"
            style={{ marginLeft: "40px" }}
            className=" d-none d-sm-flex"
          />
        </div>
        <nav>
          <ul className="d-f d-sm-none list-style-none g-5 ">
            <li>
              <Link to="/" className="  text-dec-none text-secondary ">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className=" text-dec-none text-secondary"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className=" text-dec-none text-secondary"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/about" className=" text-dec-none text-secondary ">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="signUp">
          {!isLoggedIn ? (
            <div className="d-f g-1">
              <div>My Profile</div>
              <Dropdown
                className={"header-drop"}
                dropdownRender={() => (
                  <Menu>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                      <Link to={"/myProfile"}>Profile</Link>
                    </Menu.Item>
                    <Menu.Item
                      key="2"
                      icon={<LogoutOutlined />}
                      onClick={handleLogout}
                    >
                      Logout
                    </Menu.Item>
                  </Menu>
                )}
                trigger={["click"]}
              >
                <Avatar
                  size={"small"}
                  shape="circle"
                  alt={"profile"}
                  src={profile}
                />
              </Dropdown>
            </div>
          ) : (
            <button
              className={
                responsive
                  ? "btnWeb btn bg-primary text-light  "
                  : " btnMobile btn bg-primary text-light  "
              }
            >
              <Link
                to="/admin/login"
                className=" text-dec-none text-light "
              >
                Sign Up
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
