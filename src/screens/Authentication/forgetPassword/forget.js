import React from "react";
import styles from "./forget.module.css"
import verifygif from "../images #/forgot.gif";

const Forget = () => {
    return (
      <div className={styles.body} >
         <img className={styles.middle1} src={verifygif} title={"Forgotten password ?"} id={styles.pic} />
         <form className={styles.middle2} onSubmit={handleForgetPasswordFormSubmission}>
            <div>
            <h2 className={styles.vertext}>Forgotten Password ?</h2>
            <br/>
            <h5 className={styles.H5}>Enter your Email to send code to you</h5>
            <br/>
            <div className={styles.fields}>
            <input className={styles.typecode} type="text" placeholder="Type code here" name="email" ></input>
            <br/>
            <button className={styles.sub} type="submit">Submit</button>
            </div>
            </div>
         </form>
         
      </div>
    );

   //===============================================================================================================================

   function handleForgetPasswordFormSubmission(e){
      e.preventDefault();   // to prevent page from refreshing after click on submit button
  
      let emailValue = e.target.email.value;

      const forgetPasswordReq = {email : emailValue};  
      let requestJson = JSON.stringify(forgetPasswordReq);
      console.log("zzzzzz     "+ requestJson);
      requestToResetPassword(requestJson)
   }

   function requestToResetPassword(requestJson){
      const FORGET_PASSWORD_URL = "https://graduation-backend-production.up.railway.app/auth/forgetPassword";
      fetch(FORGET_PASSWORD_URL, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: requestJson
       })
        .then((response) => response.json())
        .then((json) => handleForgetPasswordResponse(json));
   }

   function handleForgetPasswordResponse(json){
      let type = json.type;
      let responseMessage = json.message;
  
      window.alert(responseMessage);
   }





   //===============================================================================================================================

  };
  export default Forget;