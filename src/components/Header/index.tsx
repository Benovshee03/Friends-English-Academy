import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="logo"></div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="bg-success-light-1">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
      <div className="signUp">
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
