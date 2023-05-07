import React, { useState } from "react";
import styles from "../meeting.module.css";
import image from "../../../images/avatar1.png";
import Cutdown from "./cutdown";
import Popup from "./popup";
function BodyMeeting() {
  const [pop, setpop] = useState(false);
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
        <Cutdown setpop={setpop} />
        {pop ? <Popup /> : ""}
        <div className={styles.selall}>
          <select id="" className={styles.select}>
            <option value="Pending" className={styles.pen}>
              Pending
            </option>
            <option value="Accpted" className={styles.acc}>
              Accpted
            </option>
            <option value="Rejected" className={styles.rej}>
              Rejected
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default BodyMeeting;
