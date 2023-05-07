import styles from "./input.module.css";

import React, { useState, useEffect } from "react";

const Input = ({ label, small, name ,type ,maxlength , minlength ,height ,id, value}) => {
  return (
    <div className={small ? styles.inputbox2 : styles.inputbox1}>
      <input type={type} required="required" name={name} maxLength = {maxlength}
             minLength = {minlength} height={height} id={id} value = {value} />
      <span>{label}</span>
    </div>
  );
};
export default Input;
