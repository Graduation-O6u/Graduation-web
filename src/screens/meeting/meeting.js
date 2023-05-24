import React from "react";
import NavbarHome from "../Authentication/homePage/components/Navbar-home";
import BodyMeeting from "./components/bodymeeting";
import styles from "./meeting.module.css";
function Meeting() {
  return (
    <div>
      <NavbarHome type={"meeting"} />
      <div className={styles.body}>
        <BodyMeeting />
      </div>
    </div>
  );
}
export default Meeting;
