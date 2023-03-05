import React from "react";
import styles from "../welcome.module.css";
const Text = () => {
  return (
    <div className={styles.textBox}>
      <h1 className={styles.title}>
        Helping you <br></br>
        <span>Land a Job</span> and <br></br>Live your <br></br>Dreams.
      </h1>
      <p className={styles.desc}>
        Find jobs , create trackable <br></br>resumes and enrich your<br></br>{" "}
        application
      </p>
    </div>
  );
};
export default Text;
