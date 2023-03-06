import styles from "../signup/signup.module.css";
import Logo from "../../../components/logo/logo";
import Google from "../images #/Google.png";
import Apple from "../images #/Apple.png";
import Facebook from "../images #/facebook.png";
import { useState } from "react";
import Welcome from "../signup/components/welcome/welcome";
import BoxField from "./components/boxField";

const Login = () => {
  return (
    <div className={styles.body}>
      <Logo />

      <div className={styles.container}>
        <div className={styles.middle1}>
          <Welcome />
        </div>
        <BoxField />
      </div>
    </div>
  );
};

export default Login;
