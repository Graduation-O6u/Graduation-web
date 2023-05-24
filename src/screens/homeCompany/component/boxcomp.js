import React from "react";
import styles from "../company.module.css";
import PopupPost from "./popuppost";
const Boxcomp = () => {
  return (
    <div>
      <div className={styles.box}>
        <h1>Hire talent beyond borders</h1>
        <p className={styles.pres}>
          Hire pre-vetted remote developers, designers and product managers{" "}
          <br></br>with communication skills, without worrying about crazy fees
          or the legal hassle.
        </p>
        <PopupPost />
      </div>
    </div>
  );
};
export default Boxcomp;
