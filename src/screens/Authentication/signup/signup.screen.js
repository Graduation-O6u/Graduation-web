import styles from "./signup.module.css";
import Logo from "../../../components/logo/logo";
import React from "react";
import Welcome from "../signup/components/welcome/welcome";
import BoxField from "../signup/components/boxField/boxField";

const Signup = () => {
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

  //===============================================================================================================================

  function getDataAndSignUp() {
    const person = {
      name: "",
      email: "",
      password: "",
      jobId: "",
      cityId: "",
    };

    const SIGN_UP_URL =
      "https://graduation-backend-production.up.railway.app/auth/signup";
    fetch(SIGN_UP_URL, {
      method: "POST",
      body: JSON.stringify(person),
    })
      .then((response) => response.json())
      .then((json) => onGetSignUpResponse(json));
  }

  function onGetSignUpResponse(json) {
    let status = json.type;
    if (status == "Success") {
      window.alert("success signup");
    } else {
      window.alert("Error Happened");
    }
  }
};

export default Signup;
