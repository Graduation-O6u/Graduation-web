import React from "react";
import styles from "./verify.module.css";
import verifygif from "../../../images #/verify.gif";
import phone from "../../../images #/phone.png"
const Verify = () => {
    return (
      <div className={styles.body} >
         <img className={styles.middle1} src={verifygif} title={"Second Step Verification"} id={styles.pic} />
         <form className={styles.middle2}>
            <div>
            <h3 className={styles.vertext}>Second Step Verification</h3>
            <img className={styles.phone} src={phone}/>
            <h5 className={styles.H5}>Enter the verification code we sent to</h5>
            <h5 className={styles.H5}><span>fhakem75@gmail.com</span></h5>
            <br/>
            <div className={styles.fields}>
            <input className={styles.typecode} type="text" placeholder="Type code here" ></input>
            <br/>
            <button className={styles.sub}>Submit</button>
            <br/>
            <h6 className={styles.getcode}>Didn't get the code ? <a href="resend code"><span>Resend</span></a></h6>
            </div>
            </div>
         </form>
         
      </div>
    );
  };
  export default Verify;