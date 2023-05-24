import styles from "../comapnySignup/signupcompany.module.css";
import Logo from "../../../components/logo/logo";
import React from "react";
import Welcome from "../../company/comapnySignup/components/welcome/welcome";
import BoxField from "../../company/comapnySignup/components/boxField/boxField";
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
