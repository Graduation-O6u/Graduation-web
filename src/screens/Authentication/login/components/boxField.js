import React, { useEffect, useState } from "react";
import styles from "../../signup/components/boxField/boxField.module.css";
import Input from "../../components/input/input";
import Drop from "../../components/drop/drop";
import Or from "../../components/or/or";
import Media from "../../components/media/media";
import LoadingButton from "../../../../components/loadingButton/loadingButton";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { SIGN_IN_LINK } from "../../../../constants";
import Shared from "../../../../components/default.model.css";
const BoxField = () => {
  const [show, changeShow] = useState(false);
  const [loading, chageLoading] = useState(false);
  const [Err, setError] = useState("");

  return (
    <div className={styles.middle2}>
      <form className={styles.form2} onSubmit={handleLoginFormSubmission}>
        <div className={styles.nameAndEmail}>
          <Input label={"Email"} small={false} name="email" />
        </div>
        <Input label={"Password"} small={false} name="password" />
        <p className={styles.err}>{Err}</p>
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
          <a href="/forget" title="">
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
          <a href="/signup" title="Sign up">
            Sign up
          </a>
        </h5>
      </form>
    </div>
  );

  // ---------------------------------------------------------------------------------------------------//

  function handleLoginFormSubmission(e) {
    e.preventDefault(); // to prevent page from refreshing after click on submit button

    let emailValue = e.target.email.value;
    let passwordValue = e.target.password.value;
    let isRemember = false;

    const loginReq = {
      email: emailValue,
      password: passwordValue,
      remember: isRemember,
    };

    let requestJson = JSON.stringify(loginReq);
    console.log("zzzzzz     " + requestJson);
    signin(requestJson);
  }

  function signin(requestJson) {
    fetch(SIGN_IN_LINK, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: requestJson,
    })
      .then((response) => response.json())
      .then((json) => handleSignInResponse(json));
  }

  function handleSignInResponse(json) {
    let type = json.type;
    let responseMessage = json.message;
    if (type === "Success") {
      window.alert(responseMessage);
    } else if (type === "InternalServerError") {
      window.alert(responseMessage);
    } else {
      setError(responseMessage);
    }
  }

  // ---------------------------------------------------------------------------------------------------//
};
export default BoxField;
