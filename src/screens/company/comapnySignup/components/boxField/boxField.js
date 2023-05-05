import React, { useEffect, useState } from "react";
import styles from "./boxField.module.css";
import Input from "../input/input";
import Drop from "../drop signup/drop";
import Or from "../or/or"
import url from "../../../../../images/url.png"
import LoadingButton from "../../../../../components/loadingButton/loadingButton";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { SIGN_UP_LINK, UPLOAD_LINK } from "../../../../../constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const BoxField = () => {
  const navigate = useNavigate();

  var emailValue = "";

  const [selectedFile, setSelectedFile] = useState();
  const [show, changeShow] = useState(false);

  const [isFilePicked, setIsFilePicked] = useState(false);
  const [file, setFile] = useState("");
  const [loading, chageLoading] = useState(false);

  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files);
    setIsFilePicked(true);

    console.log("file", event.target.files[0]);
    console.log("file", event.target.files[0].type.split("/"));
    console.log("file", event.target.files[0].type.split("/")[1]);

    if (event.target.files[0].type.split("/")[1] != "pdf") {
      console.log("file type not allowed");
    } else if (event.target.files[0].size > 1000000) {
      console.log("file type not j");
    } else {
      console.log("sucess");
      uplaodFile(event.target.files[0]);
    }
  };
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
        <Input 
          className={styles.about}
          label={"About"}
          small={false}
          name={"About"}
          type={"text"}
        />
        <div className={styles.nameAndEmail}>
          <Input label={"Location"} small={true} name={"location"} type={"text"} />
          <Input label={"History"} small={true} name={"history"} type={"email"} />
        </div>
        <input
          type="file"
          ref={hiddenFileInput}
          style={{ display: "none" }}
          onChange={changeHandler}
        />
        <Input
          label={"Your Website Url"}
          small={false}
          name={"url"}
          type={"text"}
        />
        
        <Input
          label={"Marketing Value"}
          small={false}
          name={"value"}
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
    let cityIdValue = e.target.cities.value;
    let jobIdValue = e.target.jobs.value;
    // let cvValue = selectedCvUrl;
    let cvValue = file;

    const person = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      jobId: jobIdValue,
      cityId: cityIdValue,
      cv: cvValue,
    };

    let requestJson = JSON.stringify(person);
    console.log("zzzzzz" + requestJson);
    registerUser(requestJson);
  }

  function registerUser(requestJson) {
    chageLoading(true);
    fetch(SIGN_UP_LINK, {
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
  async function uplaodFile(file) {
    const formData = new FormData();
    console.log(file);
    formData.append("file", file);

    chageLoading(true);
    const result = await axios.post(
      `https://graduation-backend-production.up.railway.app/upload/file`,
      formData,
      {
        crossDomain: true,
      }
    );
    chageLoading(false);
    setFile(result["data"]["url"]);
  }

  //===============================================================================================================================
};
export default BoxField;
