import React from "react";
import styles from "./changepass.module.css"
import ChangePass from "../../images #/changepass.gif";

const Changepass = () => {
    return (
      <div className={styles.body} >
         <img className={styles.middle1} src={ChangePass} title={"Change Password"} id={styles.pic} />
         <form className={styles.middle2}>
            <div>
            <h2 className={styles.vertext}>Change Password</h2>
            <br/>
            <h5 className={styles.H5}>You can change your password now</h5>
            <br/>
            <div className={styles.fields}>
            <input className={styles.typecode} type="password" placeholder="Enter New password" ></input>
            <br/>
            <input className={styles.typecode} type="password" placeholder="Confirm New password" ></input>
            <br/>
            <button className={styles.sub}>Submit</button>
            </div>
            </div>
         </form>
         
      </div>
    );
  };
  export default Changepass;