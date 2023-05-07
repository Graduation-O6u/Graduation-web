import React from "react";
import Nav from "./components/navbarmet";
import BodyMeeting from "./components/bodymeeting";
import styles from "./meeting.module.css";
// import Popup from "./components/select";
function Meeting() {
  return (
    <div>
      <Nav />
      <div className={styles.body}>
        <BodyMeeting />
      </div>
    </div>
  );
}
export default Meeting;
