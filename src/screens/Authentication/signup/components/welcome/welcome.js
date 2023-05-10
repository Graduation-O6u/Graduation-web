import React from "react";
import styles from "./welcome.module.css";
import { useNavigate } from "react-router-dom";

const Welcome = ({ login }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.welcomeBox}>
      <h1 className={styles.welcome}>
        Welcome to <span className={styles.jobber}>Job Seeker</span>
        <br />
        <h3>Take the first step toward your new career</h3>
      </h1>
      {!login ? (
        <div className={styles.buttonsJoin}>
          <button
            className={styles.joinus}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Join us
          </button>
          <button
            className={styles.learnmore}
            onClick={() => {
              navigate("/learn");
            }}
          >
            Learn more
          </button>
        </div>
      ) : (
        <div className={styles.buttonsJoin}>
          <button
            className={styles.learnmore}
            onClick={() => {
              navigate("/learn");
            }}
          >
            Learn more
          </button>
        </div>
      )}
    </div>
  );
};
export default Welcome;
