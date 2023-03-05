import React from "react";
import styles from "../welcome.module.css";
const Last = () => {
  return (
    <div className={styles.lastPage}>
      <div className={styles.topImgText2}>
        <div className={styles.wellcom}>
          <p>
            <span>Get In Touch</span>
            <br></br>We Love To Hear From You.
          </p>
        </div>
        <img src="/images/photo_5.jpg" alt="" className={styles.photo5}></img>
      </div>
    </div>
  );
};
export default Last;
