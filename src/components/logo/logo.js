import React from "react";
import styles from "./logo.module.css";
import logoImgae from "../../images/Jobber.png";
const Logo = () => {
  return <img src={logoImgae} alt="Logo" className={styles.logoimg} />;
};

export default Logo;
