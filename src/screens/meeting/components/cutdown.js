import React, { useState, useEffect } from "react";
import moment from "moment";
import styles from "../meeting.module.css";
function AppointmentCountdown({ setpop, data }) {
  const [appointmentTime] = useState(data);
  const [countdown, setCountdown] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const diff = moment.duration(moment(appointmentTime).diff(now));
      const remainingHours = diff.hours();
      const remainingMinutes = diff.minutes();
      const remainingSeconds = diff.seconds();
      if (diff.asHours() > 48) {
        setCountdown(
          moment(appointmentTime)
            .subtract(48, "hours")
            .format("MMMM Do YYYY<br />h:mm A")
        );
      } else if (diff.asHours() < 0) {
        setCountdown(
          moment(appointmentTime)
            .subtract(48, "hours")
            .format("MMMM Do YYYY<br />h:mm A")
        );
      } else if (diff.asHours() <= 48 && diff.asHours() > 0) {
        setpop(true);
        <div>
          $
          {setCountdown(
            `<span>${remainingHours < 10 ? "0" : ""}${remainingHours}:${
              remainingMinutes < 10 ? "0" : ""
            }${remainingMinutes}:${
              remainingSeconds < 10 ? "0" : ""
            }${remainingSeconds}</span> `
          )}
        </div>;
      } else {
        setCountdown(data);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [appointmentTime]);
  const date = new Date();
  return (
    <div className={styles.container}>
      <div
        className={styles.text}
        style={{
          color: countdown.includes("th") || date > data ? "#666" : "red",
        }}
        dangerouslySetInnerHTML={{ __html: countdown }}
      ></div>
    </div>
  );
}
export default AppointmentCountdown;
