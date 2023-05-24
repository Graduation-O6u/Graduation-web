// import React from "react";
import styles from "./verify.module.css";
import verifygif from "../images #/verify.gif";
import phone from "../images #/phone.png";
import { VERIFY_EMAIL_LINK } from "../../../constants";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  const [Err, setError] = useState("");

  const location = useLocation();
  console.log(location);
  const secretId = location.pathname.split("/").pop();
  console.log(secretId);
  const email = "You";

  return (
    <div className={styles.body}>
      <img
        alt="verify"
        className={styles.middle1}
        src={verifygif}
        title={"Second Step Verification"}
        id={styles.pic}
      />
      <form
        className={styles.middle2}
        onSubmit={handleEmailVerificationFormSubmission}
      >
        <div>
          <h3 className={styles.vertext}>Second Step Verification</h3>
          <img className={styles.phone} src={phone} alt="phione" />
          <h5 className={styles.H5}>Enter the verification code we sent to</h5>
          <h5 className={styles.H5}>
            <span> {email} </span>
          </h5>
          <br />
          <div className={styles.fields}>
            <input
              className={styles.typecode}
              type="text"
              placeholder="Type code here"
              name="code"
            ></input>
            <br />
            <button className={styles.sub}>Submit</button>
            <br />
            <p
              style={{
                color: "red",
              }}
            >
              {Err}
            </p>
          </div>
        </div>
      </form>
    </div>
  );

  //===============================================================================================================================

  function handleEmailVerificationFormSubmission(e) {
    e.preventDefault(); // to prevent page from refreshing after click on submit button

    let sentCode = e.target.code.value;

    const verifyEmailReq = { code: sentCode };
    let requestJson = JSON.stringify(verifyEmailReq);
    console.log("zzzzzz     " + requestJson);
    verifyEmail(requestJson);
  }

  function verifyEmail(requestJson) {
    fetch(VERIFY_EMAIL_LINK + "/" + secretId, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: requestJson,
    })
      .then((response) => response.json())
      .then((json) => handleEmailVerificationResponse(json));
  }

  function handleEmailVerificationResponse(json) {
    let type = json.type;
    let responseMessage = json.message;
    if (type === "Success") {
      navigate("/login");
    } else if (type === "InternalServerError") {
      window.alert(responseMessage);
    } else {
      setError(responseMessage);
    }
  }

  //===============================================================================================================================
};
export default Verify;
