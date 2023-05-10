import React from "react";
import styles from "./lodingButton.module.css";
import Loader from "../../images/loader5.gif";
const LoadingButton = () => {
  return (
    <button className={styles.OutButton} onClick={(e) => e.preventDefault()}>
      Loading...
      <img src={Loader} className={styles.pic} alt="loading" />
    </button>
  );
};

export default LoadingButton;
