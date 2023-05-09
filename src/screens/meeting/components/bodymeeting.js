import React, { useState } from "react";
import styles from "../meeting.module.css";
import image from "../../../images/avatar1.png";
import Cutdown from "./cutdown";
import Popup from "./popup";
import Drop from "./drop";
function BodyMeeting() {
  const [pop, setpop] = useState(false);
  return (
    <div>
      <div className={styles.top}>
        <h2 className={styles.h2}>Meeting</h2>
        <div className={styles.hr}></div>
      </div>
      <div className={styles.usermeet}>
        <div className={styles.define}>
          <img src={image} alt="" className={styles.image}></img>
          <div className={styles.name}>
            <h3> Amany Mohamed </h3>
            <p>Front-Emd</p>
          </div>
        </div>
        <div className={styles.cutdrop}>
          <Cutdown setpop={setpop} />
          {pop ? <Popup /> : ""}
          <Drop />
        </div>
      </div>
    </div>
  );
}
export default BodyMeeting;
