import React, { useEffect, useState } from "react";
import {Multiselect} from 'multiselect-react-dropdown';
import styles from "./boxField.module.css";
import Input from "../input/input";
import DropIndustry from "../drop signup industry/drop";
import Drop from "../drop signup location/droploc";
import Or from "../or/or"
import url from "../../../../../images/url.png"
import LoadingButton from "../../../../../components/loadingButton/loadingButton";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { COMPANY_SIGNUP_URL } from "../../../../../constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const BoxField = () => {
  const navigate = useNavigate();

  var emailValue = "";
  const [show, changeShow] = useState(false);
  const [loading, chageLoading] = useState(false);

  const handleClose = () => {
    changeShow(false);
  };
  const handleLog = (e) => {
    e.preventDefault();
    changeShow(true);
  };

  // useEffect(() => {
  //   loadJobs();
  //   loadCities();
  // }, []);

  return (
    <div className={styles.middle2}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div className={styles.nameAndEmail}>
          <Input label={"Name"} small={true} name={"name"} type={"text"} />
          <Input label={"Email"} small={true} name={"email"} type={"email"} />
        </div>
        <Input
          label={"Password"}
          small={false}
          name={"password"}
          type={"password"}
          maxlength={12}
          minlength={6}
        />
        <Input
          label={"Confirm Password"}
          small={false}
          name={"passwordConfirmation"}
          type={"password"}
          maxlength={12}
          minlength={6}
        />
        <div className={styles.nameAndEmail}>
          <DropIndustry label={"Industry"}/>
        </div>
        <div className={styles.nameAndEmail}>
          <Drop id={styles.location} label={"Location"} multiple={false}/>
          <Input label={"History"} small={true} name={"history"} type={"text"} />
        </div>
        <Input
          label={"Your Website Url"}
          small={false}
          name={"url"}
          type={"text"}
        />
        
        <Input
          label={"Marketing Value"}
          small={false}
          name={"marketing_value"}
          type={"text"}
        />

        {/* <button className={styles.Button} onClick={handleLog}> */}
        <button className={styles.Button} type="submit">
          Sign up
        </button>
        <h6 className={styles.terms}>
          By clicking Sign Up , you agree to our{" "}
          <span id={styles.terms}> Terms</span> ,
          <span id={styles.terms}> Privacy Policy</span> and
          <span id={styles.terms}> Cookies Policy</span>{" "}
        </h6>
        <Or />
        <h5 id={styles.login}>
          Already have an account ?{" "}
          <a href="/login" title="Login">
            Login
          </a>
        </h5>
      </form>
    </div>
  );

  //===============================================================================================================================
  function handleFormSubmit(e) {
    e.preventDefault(); // to prevent page from refreshing after click on submit button
    let nameValue = e.target.name.value;
    emailValue = e.target.email.value;
    let passwordValue = e.target.password.value;
    let passwordConfirmationValue = e.target.passwordConfirmation.value;
    // let locationValue = e.target.location.value;
    let historyValue = e.target.history.value;
    let websiteUrlValue = e.target.url.value;
    let marketingValue = e.target.marketing_value.value;
    let jobId = e.target.jobs.value;

    const company = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      history: historyValue,
      websiteUrl: websiteUrlValue,
      marketingValue: marketingValue,
      jobId:jobId,
      
      locationCode:["AD"],
    };


    let requestJson = JSON.stringify(company);
    console.log("zzzzzz" + requestJson);
    signupCompany(requestJson);
  }

  function signupCompany(requestJson) {
    chageLoading(true);
    fetch(COMPANY_SIGNUP_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: requestJson,
    })
      .then((response) => response.json())
      .then((json) => onGetSignUpResponse(json));
    chageLoading(false);
  }

  function onGetSignUpResponse(json) {
    let status = json.type;
    if (status === "Success") {
      // window.alert("success");
      let secret = json.data.secret;
      navigateToVerifyEmail(secret);
    } else {
      window.alert("Error Happened");
    }
  }

  function navigateToVerifyEmail(secretId) {
    // console.log(secretId);
    navigate("/login");
  }

  //===============================================================================================================================
};
export default BoxField;
