import React, { useEffect, useState } from "react";
import styles from "../../signup/components/boxField/boxField.module.css";
import Input from "../../components/input/input";
import Drop from "../../components/drop/drop";
import Or from "../../components/or/or";
import Media from "../../components/media/media";
import LoadingButton from "../../../../components/loadingButton/loadingButton";
import { Cons } from "../../../../constants";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const BoxField = () => {

  const [show, changeShow] = useState(false);
  const [loading, chageLoading] = useState(false);

  return (
    <div className={styles.middle2}>
      <form className={styles.form2} onSubmit={handleLoginFormSubmission}>
        <div className={styles.nameAndEmail}>
          <Input label={"Email"} small={false} name="email"/>
        </div>
        <Input label={"Password"} small={false} name="password" />
        <div className={styles.name2}>
          <div className={styles.check}>
            <input
              type="checkbox"
              name="remeber me"
              value="remeber me"
              color="#5d5fef"
            />
            <label for="remeber me"> Remember me</label>
          </div>
          <a href="#login" title="Sign up">
            Forget Password?
          </a>
        </div>

        <button className={styles.Button} type="submit">
          Log in
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
          Donot have an account ?{" "}
          <a href="#login" title="Sign up">
            Sign up
          </a>
        </h5>
      </form>
    </div>
  );

  // ---------------------------------------------------------------------------------------------------//

  function handleLoginFormSubmission(e){
    e.preventDefault();   // to prevent page from refreshing after click on submit button

    let emailValue = e.target.email.value;
    let passwordValue = e.target.password.value;
    let isRemember = false;

    const loginReq = {email:emailValue, 
                      password:passwordValue,
                      remember: isRemember
                      };

    let requestJson = JSON.stringify(loginReq);
    console.log("zzzzzz     "+ requestJson);
    signin(requestJson)
  }


  function signin(requestJson){
      const LOGIN_URL = "https://graduation-backend-production.up.railway.app/auth/signin";
      fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: requestJson
       })
        .then((response) => response.json())
        .then((json) => handleSignInResponse(json));

  }

  function handleSignInResponse(json){
    let type = json.type;
    let responseMessage = json.message;

    window.alert(responseMessage);
  }


 // ---------------------------------------------------------------------------------------------------//


  
};
export default BoxField;
