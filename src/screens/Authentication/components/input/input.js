import styles from "./input.module.css";

import React, { useState, useEffect } from "react";

const Input = ({ label, small }) => {
  return (
    <div className={small ? styles.inputbox2 : styles.inputbox1}>
      <input type="text" required="required" />
      <span>{label}</span>
    </div>
  );
};
export default Input;
