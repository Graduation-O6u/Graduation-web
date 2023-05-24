import React from "react";
import styles from "./welcome.module.css";
const Welcome = () => {
  return (
    <div className={styles.welcomeBox}>
      <h1 className={styles.welcome}>
        Welcome to <span className={styles.jobber}>Job Seeker</span>
        <br />
        <h3>Take the first step toward your new career</h3>
      </h1>
      <div className={styles.buttonsJoin}>
        <button className={styles.learnmore}>Learn more</button>
      </div>
    </div>
  );
};
export default Welcome;
