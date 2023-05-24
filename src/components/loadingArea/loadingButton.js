import React from "react";
import styles from "./lodingButton.module.css";
import Loader from "../../images/loader5.gif";
const LoadingArea = () => {
  return (
    <div>
      <img src={Loader} className={styles.pic} alt="logo" />
    </div>
  );
};

export default LoadingArea;
