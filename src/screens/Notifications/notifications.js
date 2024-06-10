import React from "react";
import Nav from "./components/navbar";
import Notification from "./components/notfiications";
import styles from "./notfications.module.css";
import Navbarr from "../Authentication/homePage/components/Navbar-home";
function Navbar() {
  return (
    <div>
      <Navbarr />
      <div className={styles.body_notif}>
        <Notification />
      </div>
    </div>
  );
}
export default Navbar;
