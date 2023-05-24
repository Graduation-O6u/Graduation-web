import React from "react";
import  "../welcome.css";
import { Icon } from "@iconify/react";
import messageIcon from "@iconify/icons-ep/message";
import baselineLocalPhone from "@iconify/icons-ic/baseline-local-phone";
import appleIcon from "@iconify/icons-bi/apple";
import googlePlayIcon from "@iconify/icons-logos/google-play-icon";
const Footer = () => {
  return (
    <>
    <div className="boxFooter">
      <div className="Us">
        <div className="email">
          <div className="Us">
            <Icon icon={messageIcon} className="icon1" />
            <p>Chat with us</p>
            <br></br>
          </div>
          <p>our friendly team is here to help!</p>
          <p>jobber@gmail.com</p>
        </div>
        <div className="call">
          <div className="Us">
            <Icon icon={baselineLocalPhone} className="icon1" />
            <p>Call us</p>
            <br></br>
          </div>
          <p>Mon-Fri from 9Pm to 4Pm.</p>
          <p>+20 1016794852</p>
        </div>
      </div>
    </div>
     <div className="download">
      <button className="down">
        <p className="only">Download on the </p>{" "}
        <div style={{ display:"flex" , flexDirection:"row"}}>
            <Icon icon={appleIcon} className="iconApp"/> 
        <p style={{ marginLeft:"2%" , width:"100%"}}>App Store</p>
        </div>
      </button>
      <button className="down">
        {" "}
        <p className="only">Get it on </p>
        <div style={{ display:"flex" , flexDirection:"row"}}>
            <Icon icon={googlePlayIcon} className="iconApp" /> 
            <p style={{ marginLeft:"2%" , width:"100%"}}>Google Play</p>
        </div>
      </button>
    </div>
    </>
  );
};
export default Footer;
