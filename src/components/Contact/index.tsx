import React from "react";
import phone from "../../images/phone.png";
import loc from "../../images/location_on.png";
import mail from "../../images/email.png";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const Contact = () => {
  return (
    <div className="smContainer ">
      <div  className="row justify-content-sb " >
        <div className="d-f fd-column align-items-center justify-content-center " style={{width:"231px",height:"230px",border:"1px solid var(--foundation-red-normal-hover, color(display-p3 0.5176 0.1451 0.1961));"}}>
          <div>
            <img src={phone} alt="phone" />
          </div>
          <div>Give us a call</div>
          <div>
            <div>+994 55 776 71 86</div>
            <div>+994 55 776 71 86</div>
          </div>
        </div>
        <div className="d-f fd-column align-items-center justify-content-center" style={{width:"231px",height:"230px"}}>
          <div>
            <img src={loc} alt="loc" />
          </div>
          <div>Our main office</div>
          <div>
            <div>Baku</div>
            <div>Telet Shikaliyev 14</div>
          </div>
        </div>
        <div className="d-f fd-column align-items-center justify-content-center" style={{width:"231px",height:"230px",border:"1px solid var(--foundation-red-normal-hover, color(display-p3 0.5176 0.1451 0.1961));"}}>
          <div>
            <img src={mail} alt="mail" />
          </div>
          <div>Send us an email</div>
          <div>
            <div>friendsAcademy@gmail.com</div>
            <div>+994 55 776 71 86</div>
          </div>
        </div>
      </div>
      <div className="d-f fd-column justify-content-center align-items-center g-2 mb-3" style={{width:"100%",height:"504px",boxShadow: "0px 4px 12px 0px rgba(136, 159, 192, 0.25)",border:"1px solid #F2F7FD;"}}>
        <div className="fs-xl fw-700 text-primary">How could we help you</div>
        <div style={{width:"90%"}} className="d-f fd-column g-2">
          <div className="d-f g-2">
            <Input size="large" placeholder="Name" />
            <Input size="large" placeholder="Email" />
          </div>
          <Input size="large" placeholder="Subject" />
          <Input size="large" placeholder="Enter your mail or username" />
          <TextArea
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
            placeholder="Write your problem..."
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </div>
        <div>
          <button className="btn bg-primary text-light" style={{width:"392px",height:"48px"}}>Send Message</button>
        </div>
      </div>
      <div >
      <iframe style={{width:"100%",height:"266px"}} title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12154.532348320125!2d49.84224319999999!3d40.3948239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4c56833499%3A0x9a2d50717850bb4a!2sUniverium!5e0!3m2!1sen!2saz!4v1681220658162!5m2!1sen!2saz"></iframe>
      </div>
    </div>
  );
};

export default Contact;
