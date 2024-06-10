import styles from "./signup.module.css";
import Logo from "../../../components/logo/logo";
import React from "react";
import Welcome from "../signup/components/welcome/welcome";
import BoxField from "../signup/components/boxField/boxField";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  return (
    <div className={styles.body}>
      <Logo />
      <ToastContainer />

      <div className={styles.container}>
        <div className={styles.middle1}>
          <Welcome login={true} />
        </div>
        <BoxField />
      </div>
    </div>
  );
};

export default Signup;
