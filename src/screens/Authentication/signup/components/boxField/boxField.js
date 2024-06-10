import React, { useEffect, useState } from "react";
import styles from "./boxField.module.css";
import Input from "../../../components/input/input";
import Drop from "../../../components/drop/drop";
import Or from "../../../components/or/or";

import Media from "../../../components/media/media";
import LoadingButton from "../../../../../components/loadingButton/loadingButton";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  SERVER_LINK,
  SIGN_UP_LINK,
  UPLOAD_LINK,
} from "../../../../../constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const BoxField = () => {
  const notify = async (error) => toast.error(error);

  const navigate = useNavigate();

  var emailValue = "";

  const [selectedFile, setSelectedFile] = useState();
  const [fileName, setFileName] = useState("Upload Your CV");

  const [show, changeShow] = useState(false);

  const [isFilePicked, setIsFilePicked] = useState(false);
  const [file, setFile] = useState("");
  const [error, setError] = useState("");

  const [loading, chageLoading] = useState(false);
  const [loading2, chageLoading2] = useState(false);
  const [country, setCountry] = useState("");
  const [job, setJob] = useState("");

  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);

    if (event.target.files[0].type.split("/")[1] != "pdf") {
      notify("file type not allowed");
    } else if (event.target.files[0].size > 1000000) {
      notify("file size too big");
    } else {
      setFileName(event.target.files[0].name);
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
        <div className={styles.nameAndEmail}>
          <Input
            label={"Password"}
            small={true}
            name={"password"}
            type={"password"}
          />
          <Input
            label={"Confirm Password"}
            small={true}
            name={"passwordConfirmation"}
            type={"password"}
          />
        </div>

        <div className={styles.nameAndEmail}>
          <Drop setCountry={setCountry} setJob={setJob} />
        </div>
        <input
          type="file"
          ref={hiddenFileInput}
          style={{ display: "none" }}
          onChange={changeHandler}
        />
        {loading ? (
          <LoadingButton />
        ) : (
          <button
            type="button"
            className={styles.OutButton}
            onClick={handleClick}
          >
            {fileName}
          </button>
        )}
        {loading2 ? (
          <LoadingButton />
        ) : (
          <button className={styles.Button} type="submit">
            Sign up
          </button>
        )}

        {/* <button className={styles.Button} onClick={handleLog}> */}

        <h6 className={styles.terms}>
          By clicking Sign Up , you agree to our{" "}
          <span id={styles.terms}> Terms</span> ,
          <span id={styles.terms}> Privacy Policy</span> and
          <span id={styles.terms}> Cookies Policy</span>{" "}
        </h6>

        <Or title={"Or"} />

        {/* <Media login={false} /> */}

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

    if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(nameValue)) {
      return notify("Not valid name");
    }
    if (nameValue.length < 5) {
      return notify("Not valid name");
    }
    //
    if (
      !/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwordValue)
    ) {
      return notify(
        "password must have at least 8 chars which should be between uppercase characters, lowercase characters and numbers"
      );
    }
    if (passwordValue !== passwordConfirmationValue) {
      return notify("Password not match");
    }
    let cvValue = file;

    const person = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      jobId: job,
      cityId: country,
      cv: cvValue,
    };
    let requestJson = JSON.stringify(person);
    if (
      !nameValue ||
      !emailValue ||
      !passwordValue ||
      !passwordConfirmationValue ||
      country === "" ||
      job === "" ||
      cvValue === ""
    ) {
      return notify("Please Fill all fields");
    }

    registerUser(requestJson);
  }

  async function registerUser(requestJson) {
    chageLoading2(true);
    await fetch(SIGN_UP_LINK, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: requestJson,
    })
      .then((response) => response.json())
      .then((json) => onGetSignUpResponse(json));
  }

  function onGetSignUpResponse(json) {
    let status = json.type;
    chageLoading2(false);

    if (status === "Success") {
      let secret = json.data.secret;
      navigateToVerifyEmail(secret);
    } else {
      if (typeof json.message !== "string") {
        notify(json.message[0]);
      } else {
        notify(json.message);
      }

      // window.alert("Error Happened");
    }
  }

  function navigateToVerifyEmail(secretId) {
    // console.log(secretId);
    navigate("/login");
  }

  //===============================================================================================================================
  async function uplaodFile(file) {
    const formData = new FormData();
    formData.append("file", file);

    chageLoading(true);
    const result = await axios.post(`${SERVER_LINK}/upload/file`, formData, {
      crossDomain: true,
    });
    chageLoading(false);
    setFile(result["data"]["url"]);
  }

  //===============================================================================================================================
};
export default BoxField;
