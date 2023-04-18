import styles from "../Signup comapny/signupcompany.module.css";
import Logo from "../../../components/logo/logo";
import React from "react";
import Welcome from "../../profile company/Signup comapny/components/welcome/welcome";
import BoxField from "../../profile company/Signup comapny/components/boxField/boxField";
const CompanySignup = () => {
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

export default CompanySignup;
