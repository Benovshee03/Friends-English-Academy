import React from "react";
import { Link } from "react-router-dom";
import fb from "../../images/Facebook.png";
import linkedin from "../../images/LinkedIn.png";
import twitter from "../../images/Twitter.png";
import pinterest from "../../images/Twitter.png";
const Footer = () => {
    
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              Fluency is nothing more than mastering the 100 most important
              real-life conversations
            </li>
            <li style={{backgroundColor:"red"}} >
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
        <nav>
          <ul>
            <li>
              <p>Speak Up Courses</p>
            </li>
            <li>
              <Link to="#">Learning English</Link>
            </li>
            <li>
              <Link to="#">Learning Russian</Link>
            </li>
            <li>
              <Link to="#">Learning French</Link>
            </li>
            <li>
              <Link to="#">Learning German</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <p>Products</p>
            </li>
            <li>
              <Link to="#">Home Page</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <p>Contact Information</p>
            </li>
            <li>
              <Link to="#">+994705503434</Link>
            </li>
            <li>
              <Link to="#">friendsacademy@gmail.com</Link>
            </li>
            <li>
              <Link to="#">Baku,Azerbaijan</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
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
