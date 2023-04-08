import React from "react";
import styles from "../Notifications/notfications.module.css"
import line from "../../images/V-line.png"

const Notifications = () => {
    return (
      <div className={styles.body}>
        <img src={line} className={styles.line} />
        <h3>Notifications</h3>
        <h6>Mark as read</h6>

      </div>
    );
  };
  
  export default Notifications;