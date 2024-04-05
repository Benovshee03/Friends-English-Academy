import React from "react";
import { Link } from "react-router-dom";
import fb from "../../images/Facebook.png";
import linkedin from "../../images/LinkedIn.png";
import twitter from "../../images/Twitter.png";
import pinterest from "../../images/Twitter.png";
import phone from "../../images/phone_iphone.png"
import mail from "../../images/mail.png"
import loc from "../../images/fmd_good.png"
import "../Footer/style.css"
const Footer = () => {
    
  return (
    <div className=" footer  text-light ">
      <div className="d-f container ">
        <nav className="w-30">
          <ul className="  list-style-none">
            <li className="fs-xs text-light align-items-center fw-400" style={{height:"96px"}}>
              Fluency is nothing more than mastering the 100 most important
              real-life conversations
            </li>
            <li className="d-f g-5"style={{height:"40px"}} >
              <div>
                <img src={fb} alt="facebook logo" />
              </div>
              <div>
                <img src={linkedin} alt="linkedin logo" />
              </div>
              <div>
                <img src={twitter} alt="twitter logo" />
              </div>
              <div>
                <img src={pinterest} alt="pinterest logo" />
              </div>
            </li>
          </ul>
        </nav>
        <nav className="w-20">
          <ul className="  list-style-none">
            <li>
              <p className="fw-700">Speak Up Courses</p>
            </li>
            <li>
              <Link className=" text-dec-none text-light  text-dec-none fw-400" to="#">Learning English</Link>
            </li>
            <li>
              <Link  className="text-light  text-dec-none"to="#">Learning Russian</Link>
            </li>
            <li>
              <Link  className="text-light  text-dec-none"to="#">Learning French</Link>
            </li>
            <li>
              <Link className="text-light  text-dec-none" to="#">Learning German</Link>
            </li>
          </ul>
        </nav>
        <nav className="w-20">
          <ul className=" list-style-none">
            <li>
              <p>Products</p>
            </li>
            <li>
              <Link className="text-light  text-dec-none" to="#">Home Page</Link>
            </li>
            <li>
              <Link className="text-light  text-dec-none" to="#">Contact Us</Link>
            </li>
            <li>
              <Link  className="text-light  text-dec-none" to="#">About Us</Link>
            </li>
          </ul>
        </nav>
        <nav className="w-30">
          <ul className=" list-style-none ">
            <li>
              <p>Contact Information</p>
            </li>
            <li>
              <Link to="#" className="text-light  text-dec-none"><span><img src={phone} alt="phone" /></span>+994705503434</Link>
            </li>
            <li>
              <Link to="#"  className="text-light  text-dec-none"><img src={mail} alt="mail" />friendsacademy@gmail.com</Link>
            </li>
            <li>
              <Link to="#"  className="text-light  text-dec-none"><img src={loc} alt="location" />Baku,Azerbaijan</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div> &copy; 2024 Friends Academy. All Rights Reserved.</div>
        <div>
            <div>Terms & Condition</div>
            <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
