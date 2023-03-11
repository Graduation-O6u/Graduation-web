import React, { useEffect, useState } from "react";
import styles from "./boxField.module.css";
import Input from "../../../components/input/input";
import Drop from "../../../components/drop/drop";
import Or from "../../../components/or/or";
import Media from "../../../components/media/media";
import LoadingButton from "../../../../../components/loadingButton/loadingButton";
import { Cons } from "../../../../../constants";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const BoxField = () => {

  //-----
  var selectedCvUrl = "";

  //------
  const [selectedFile, setSelectedFile] = useState();
  const [show, changeShow] = useState(false);

  const [isFilePicked, setIsFilePicked] = useState(false);

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
          <Input label={"Name"} small={true} name={"name"}/>
          <Input label={"Email"} small={true} name={"email"}/>
        </div>
        <Input label={"Password"} small={false} name={"password"}/>
        <Input label={"Confirm Password"} small={false} name={"passwordConfirmation"}/>
        <div className={styles.nameAndEmail}>
          <Drop/>
          
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
          <button className={styles.OutButton} onClick={handleClick}>
            Uplaod Your cv
          </button>
        )}

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
        <Media />
        <h5 id={styles.login}>
          Already have an account ?{" "}
          <a href="#login" title="Login">
            Login
          </a>
        </h5>
      </form>
    </div>
  );

  
  //===============================================================================================================================
  function handleFormSubmit(e){
      e.preventDefault();   // to prevent page from refreshing after click on submit button
      let nameValue = e.target.name.value;
      let emailValue = e.target.email.value;
      let passwordValue = e.target.password.value;
      let passwordConfirmationValue = e.target.passwordConfirmation.value;
      let cityIdValue = e.target.cities.value;
      let jobIdValue = e.target.jobs.value;
      // let cvValue = selectedCvUrl;
      let cvValue = "https://graduation-backend-production.up.railway.app/api/v1/uploads/cvab2bcba4-848f-496f-a7d5-0956c5a019e6.pdf";

      const person = {name:nameValue, 
                      email:emailValue,
                      password:passwordValue,
                      jobId:jobIdValue,
                      cityId:cityIdValue,
                      cv:cvValue
                      };

      let requestJson = JSON.stringify(person);
      console.log("zzzzzz"+ requestJson);
      registerUser(requestJson)
      
  }

  function registerUser(requestJson) {
      chageLoading(true);    
      const SIGN_UP_URL = "https://graduation-backend-production.up.railway.app/auth/signup";
      fetch(SIGN_UP_URL, {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: requestJson
      })
          .then((response) => response.json())
          .then((json) => onGetSignUpResponse(json));
      chageLoading(false);
  }

  function onGetSignUpResponse(json) {
      let status = json.type;
      if (status == "Success") {
          window.alert("success signup");
      } else {
          window.alert("Error Happened");
      }
  }

  //===============================================================================================================================
  function uplaodFile() {
    const formData = new FormData();
    formData.append("file", selectedFile);

    chageLoading(true);
    fetch(Cons.baseUrl + "/upload/file", {
      method: "POST",
      headers: {
        'content-type': 'multipart/form-data'
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
          chageLoading(false);
          console.log("Success:", result.url);
          selectedCvUrl = result.url;
      })
      .catch((error) => {
          console.error("Error:", error);
      });
  }
  
  //===============================================================================================================================






};
export default BoxField;
