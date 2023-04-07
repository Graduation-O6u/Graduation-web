import React from "react";
import "../welcome.css";
import Image from "../../../../images/200w.webp" ;
const Last = () => {
  return (
    <div className="topImgText">
      <div className="wellcom">
        <p>
          <span >Get In Touch</span> 
          <br></br>
          <p class="love-text">We <span class="heart"></span> Love To Hear From You.</p>
        </p>
      </div>
      <img src={Image} alt='' />
    </div>
  );
};
export default Last;
