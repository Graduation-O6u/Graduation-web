import styles from "./input.module.css";

import React, { useState, useEffect } from "react";

const Input = ({ label, small, name ,type ,maxlength , minlength }) => {
  return (
    <div className={small ? styles.inputbox2 : styles.inputbox1}>
      <input type={type} required="required" name={name} maxLength = {maxlength} minLength = {minlength} />
      <span>{label}</span>
    </div>
  );
};
export default Input;
