import React, { Component } from "react";
import styles from "./or.module.css";

const Or = ({ title, job }) => {
  return (
    <div className={styles.Or}>
      <hr className={job === "true" ? styles.line2 : styles.line} />

      <h6 className={styles.continue}> {title} </h6>
      <hr className={job === "true" ? styles.line2 : styles.line} />
    </div>
  );
};

export default Or;
