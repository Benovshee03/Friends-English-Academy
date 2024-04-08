import React from "react";
import { Link } from "react-router-dom";
import fb from "../../images/Facebook.png";
import linkedin from "../../images/LinkedIn.png";
import twitter from "../../images/Twitter.png";
import pinterest from "../../images/Twitter.png";
import phone from "../../images/phone_iphone.png"
import mail from "../../images/mail.png"
import loc from "../../images/fmd_good.png"
import "@benovshe/sasslibrary/dist/index.css";

const Footer = () => {
    
  return (
    <div className=" bg-primary  text-light ">
      <div className="d-f container  justify-content-sb ">
        <nav className=" mt-2" style={{width:"258px"}}>
          <ul className="  list-style-none ">
            <li className="fs-xs text-light align-items-center fw-400" style={{height:"96px"}}>
              Fluency is nothing more than mastering the 100 most important
              real-life conversations
            </li>
            <li className="d-f g-1 mt-2"style={{height:"40px"}} >
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
        <nav className="mt-2" style={{width:"145px"}}>
          <ul className="  list-style-none">
            <li>
              <p className="fw-700"> Courses</p>
            </li>
            <li>
              <Link className=" text-dec-none text-light  text-dec-none fs-14 " to="#">Learning English</Link>
            </li>
            <li>
              <Link  className="text-light  text-dec-none fs-14" to="#">Learning Russian</Link>
            </li>
            <li>
              <Link  className="text-light  text-dec-none fs-14" to="#">Learning French</Link>
            </li>
            <li>
              <Link className="text-light  text-dec-none fs-14" to="#">Learning German</Link>
            </li>
          </ul>
        </nav>
        <nav className="mt-2" style={{width:"135px"}}>
          <ul className=" list-style-none">
            <li>
              <p>Products</p>
            </li>
            <li>
              <Link className="text-light  text-dec-none fs-14" to="#">Home Page</Link>
            </li>
            <li>
              <Link className="text-light  text-dec-none fs-14" to="#">Contact Us</Link>
            </li>
            <li>
              <Link  className="text-light  text-dec-none fs-14" to="#">About Us</Link>
            </li>
          </ul>
        </nav>
        <nav className="mt-2" style={{width:"241px"}}>
          <ul className=" list-style-none ">
            <li>
              <p>Contact Information</p>
            </li>
            <li>
              <Link to="#" className="text-light d-f g-1 text-dec-none fs-14"><span><img src={phone} alt="phone" /></span>+994705503434</Link>
            </li>
            <li>
              <Link to="#"  className="text-light d-f g-1 text-dec-none fs-14"><img src={mail} alt="mail" />friendsacademy@gmail.com</Link>
            </li>
            <li>
              <Link to="#"  className="text-light d-f g-1 text-dec-none fs-14"><img src={loc} alt="location" />Baku,Azerbaijan</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div style={{borderTop:"0.5px solid var(--white, #FFF)"}}>
        <div className="container d-f justify-content-sb align-items-center" style={{height:"73px"}}>
        <div className="fw-600 fs-sm"> &copy; 2024 Friends Academy. All Rights Reserved.</div>
        <div className="d-f g-3">
            <div>Terms & Condition</div>
            <div>Privacy Policy</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
