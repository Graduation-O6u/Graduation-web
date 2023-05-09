import React from "react";
import Logo from "../../images/Jobber.png";
import styles from "./admin.module.css";
import Card from "./card/cardcomp";
import CardUser from "./card/carduser";
function Admin() {
  return (
    <div>
      <div className={styles.top}>
        <img
          src={Logo}
          height="45"
          className="d-inline-block align-top"
          alt=""
          style={{ margin: "3% 5%" }}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.colum}>
          <p className={styles.colump}>Total Members</p>
          <p className={styles.colump}>15</p>
        </div>
        <div className={styles.colum}>
          <p className={styles.colump}>Total Companies</p>
          <p className={styles.colump}>15</p>
        </div>
        <div className={styles.colum}>
          <p className={styles.colump}>Total Meeting</p>
          <p className={styles.colump}>15</p>
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.title}> Recent Companies</p>
        <Card />
      </div>
      <div className={styles.body}>
        <p className={styles.title}> Recent Users </p>
        <CardUser />
      </div>
      <div className={styles.body}>
        <p className={styles.title}> Recent Jobs </p>
        <Card />
      </div>
    </div>
  );
}
export default Admin;
