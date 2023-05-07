import React from "react";
import styles from "../meeting.module.css";
import image from "../../../images/avatar1.png";
import Cutdown from "./cutdown";
function BodyMeeting() {
  return (
    <div>
      <div className={styles.top}>
        <h2 className={styles.h2}>Meeting</h2>
        <div className={styles.hr}></div>
      </div>
      <div className={styles.usermeet}>
        <img src={image} alt="" className={styles.image}></img>
        <div className={styles.name}>
          <h3> Amany Mohamed </h3>
          <p>Front-Emd</p>
        </div>
        <Cutdown />
      </div>
    </div>
  );
}
export default BodyMeeting;
