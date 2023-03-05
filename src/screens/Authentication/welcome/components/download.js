import React from "react";
import styles from "../welcome.module.css";
import { Icon } from "@iconify/react";
import appleIcon from "@iconify/icons-bi/apple";
import googlePlayIcon from "@iconify/icons-logos/google-play-icon";
const Download = () => {
  return (
    <div className={styles.download}>
      <button className={styles.down}>
        <p className={styles.only}>Download on the </p>{" "}
        <Icon icon={appleIcon} className={styles.iconApp} /> App Store
      </button>
      <button className={styles.down}>
        {" "}
        <p className={styles.only}>Get it on </p>
        <Icon icon={googlePlayIcon} className={styles.iconApp} /> Google Play
      </button>
    </div>
  );
};
export default Download;
