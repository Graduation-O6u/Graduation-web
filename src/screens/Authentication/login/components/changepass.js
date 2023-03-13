import React, { useState } from "react";
import styles from "./changepass.module.css";
import ChangePass from "../../images #/changepass.gif";
import {
  RESET_PASSWORD_LINK,
  CHANGE_PASSWORD_LINK,
} from "../../../../constants";
import { useNavigate } from "react-router-dom";

const Changepass = () => {
  const [change, setChange] = useState(false);
  const [Err, setError] = useState("");
  const [Err2, setError2] = useState("");

  const navigate = useNavigate();

  return (
    <div className={styles.body}>
      <img
        className={styles.middle1}
        src={ChangePass}
        title={"Change Password"}
        id={styles.pic}
      />
      {!change ? (
        <form
          className={styles.middle2}
          onSubmit={handleForgetPasswordFormSubmission}
        >
          <div>
            <h2 className={styles.vertext}>Verify Code</h2>
            <br />
            <h5 className={styles.H5}>Enter your code that send to you</h5>
            <br />
            <div className={styles.fields}>
              <input
                className={styles.typecode}
                type="text"
                placeholder="Type code here"
                name="code"
              ></input>
              <p className={styles.err}>{Err}</p>
              <br />
              <button className={styles.sub} type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form className={styles.middle2}>
          <div>
            <h2 className={styles.vertext}>Change Password</h2>
            <br />
            <h5 className={styles.H5}>You can change your password now</h5>
            <br />
            <div className={styles.fields}>
              <input
                className={styles.typecode}
                type="password"
                name="password"
                placeholder="Enter New password"
              ></input>
              <br />
              <input
                className={styles.typecode}
                type="password"
                name="confirm"
                placeholder="Confirm New password"
              ></input>
              <br />
              <p className={styles.err}>{Err2}</p>

              <button className={styles.sub}>Submit</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
  function handleForgetPasswordFormSubmission(e) {
    e.preventDefault(); // to prevent page from refreshing after click on submit button

    let codeValue = e.target.code.value;

    const forgetPasswordReq = { code: codeValue };
    let requestJson = JSON.stringify(forgetPasswordReq);
    console.log("zzzzzz     " + requestJson);
    requestToResetPassword(requestJson);
  }

  function requestToResetPassword(requestJson) {
    const id =
      window.location.pathname.split("/")[
        window.location.pathname.split("/").length - 1
      ];
    console.log(id);
    fetch(RESET_PASSWORD_LINK + `/${id}`, {
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
      setChange(true);
    } else if (type === "InternalServerError") {
      window.alert(responseMessage);
    } else {
      setError(responseMessage);
    }
  }

  /********************************************************************* */
  function handleChangePasswordFormSubmission(e) {
    e.preventDefault(); // to prevent page from refreshing after click on submit button

    let passwordValue = e.target.password.value;
    let confirmValue = e.target.confirm.value;
    const forgetPasswordReq = { password: passwordValue };
    let requestJson = JSON.stringify(forgetPasswordReq);
    console.log("zzzzzz     " + requestJson);
    requestToChangePassword(requestJson);
  }

  function requestToChangePassword(requestJson) {
    const id =
      window.location.pathname.split("/")[
        window.location.pathname.split("/").length - 1
      ];
    console.log(id);
    fetch(CHANGE_PASSWORD_LINK + `/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: requestJson,
    })
      .then((response) => response.json())
      .then((json) => handleChangePasswordResponse(json));
  }

  function handleChangePasswordResponse(json) {
    let type = json.type;
    let responseMessage = json.message;
    if (type === "Success") {
      navigate("/login");
    } else if (type === "InternalServerError") {
      window.alert(responseMessage);
    } else {
      setError2(responseMessage);
    }
  }
};
export default Changepass;
