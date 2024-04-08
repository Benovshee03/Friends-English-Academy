import React from "react";
import { Link } from "react-router-dom";
import "@benovshe/sasslibrary/dist/index.css";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--foundation-red-light-hover, #F6DDE1)",
      }}
    >
      <div
        className="container d-f"
        style={{
          justifyContent: "space-between",
          height: "111px",
          alignItems: "center",
        }}
      >
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul className="d-f list-style-none g-5 ">
            <li>
              <Link to="/" className="  text-dec-none text-secondary ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className=" text-dec-none text-secondary">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/contact" className=" text-dec-none text-secondary">
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
          <button
            className="bg-primary text-light  "
            style={{
              width: "97px",
              borderRadius: "8px",
              height: "40px",
              border: "none",
            }}
          >
            <Link to="/login" className=" text-dec-none text-light ">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
