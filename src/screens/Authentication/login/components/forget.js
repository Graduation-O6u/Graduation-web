import React from "react";
import styles from "./forget.module.css"
import verifygif from "../../images #/forgot.gif";

const Forget = () => {
    return (
      <div className={styles.body} >
         <img className={styles.middle1} src={verifygif} title={"Forgotten password ?"} id={styles.pic} />
         <form className={styles.middle2}>
            <div>
            <h2 className={styles.vertext}>Forgotten Password ?</h2>
            <br/>
            <h5 className={styles.H5}>Enter your Email to send code to you</h5>
            <br/>
            <div className={styles.fields}>
            <input className={styles.typecode} type="text" placeholder="Type code here" ></input>
            <br/>
            <button className={styles.sub}>Submit</button>
            </div>
            </div>
         </form>
         
      </div>
    );
  };
  export default Forget;