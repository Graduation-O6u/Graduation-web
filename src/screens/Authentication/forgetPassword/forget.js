import React, { useState } from "react";
import styles from "./forget.module.css";
import verifygif from "../images #/forgot.gif";
import { FORGET_PASSWORD_LINK } from "../../../constants";
import { useNavigate } from "react-router-dom";

const Forget = () => {
  const navigate = useNavigate();
  const [Err, setError] = useState("");

  return (
    <div className={styles.body}>
      <img
        className={styles.middle1}
        src={verifygif}
        title={"Forgotten password ?"}
        id={styles.pic}
      />
      <form
        className={styles.middle2}
        onSubmit={handleForgetPasswordFormSubmission}
      >
        <div>
          <h2 className={styles.vertext}>Forgotten Password ?</h2>
          <br />
          <h5 className={styles.H5}>Enter your Email to send code to you</h5>
          <br />
          <div className={styles.fields}>
            <input
              className={styles.typecode}
              type="text"
              placeholder="Type Your email here"
              name="email"
            ></input>
            <p className={styles.err}>{Err}</p>
            <br />
            <button className={styles.sub} type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  //===============================================================================================================================

  function handleForgetPasswordFormSubmission(e) {
      e.preventDefault(); // to prevent page from refreshing after click on submit button

      let emailValue = e.target.email.value;

      const formDataIsValid = isValidData(emailValue)
      if(!formDataIsValid){
        return;
      }

      const forgetPasswordReq = { email: emailValue };
      let requestJson = JSON.stringify(forgetPasswordReq);
      console.log("zzzzzz     " + requestJson);
      requestToResetPassword(requestJson);
  }

  function isValidData(email){
      const emailRegex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const isValidEmail = emailRegex.test(email);

      if(isValidEmail == false){
          window.alert("Email not valid");
          return false;
      }

      return true;
  }

  function requestToResetPassword(requestJson) {
    fetch(FORGET_PASSWORD_LINK, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: requestJson,
    })
      .then((response) => response.json())
      .then((json) => handleForgetPasswordResponse(json));
  }

  function handleForgetPasswordResponse(json) {
    let type = json.type;
    let responseMessage = json.message;
    if (type === "Success") {
      navigate("/changePassword");
    } else if (type === "InternalServerError") {
      window.alert(responseMessage);
    } else {
      setError(responseMessage);
    }
  }

  //===============================================================================================================================
};
export default Forget;
