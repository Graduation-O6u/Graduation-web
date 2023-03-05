import styles from "./drop.module.css";

import React, { useState, useEffect } from "react";

const Drop = ({ label }) => {
  const cities = ["Egypt", "Yellow"];

  return (
    <div className={styles.select}>
      <select name="format" id="format">
        <option selected>{label}</option>
        {}

        {cities.map((city) => {
          return <option value={city.code}> {city.name} </option>;
        })}
      </select>
    </div>
  );
};
export default Drop;
