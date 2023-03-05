import React from "react";
import styles from "../welcome.module.css";
import { Icon } from "@iconify/react";
import messageIcon from "@iconify/icons-ep/message";
import baselineLocalPhone from "@iconify/icons-ic/baseline-local-phone";

const Footer = () => {
  return (
    <div className={styles.boxFooter}>
      <div className={styles.Us}>
        <div className={styles.email}>
          <div className={styles.Us}>
            <Icon icon={messageIcon} className={styles.icon1} />
            <p>Chat with us</p>
            <br></br>
          </div>
          <p>our friendly team is here to help!</p>
          <p>jobber@gmail.com</p>
        </div>
        <div className={styles.call}>
          <div className={styles.Us}>
            <Icon icon={baselineLocalPhone} className={styles.icon1} />
            <p>Call us</p>
            <br></br>
          </div>
          <p>Mon-Fri from 9Pm to 4Pm.</p>
          <p>+20 1016794852</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
