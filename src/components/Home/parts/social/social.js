import React from "react";
import styles from "./css/social.module.css"
import "./css/all.min.css"
const Social = () => {
    return (
        <div className={styles.boxSocial}>
            <div className={styles.box1}>
                <i class="fa-brands fa-facebook"></i>
            </div>
            <div className={styles.box1}>
                <img src="/images/google.jpj.PNG" alt="" className={styles.img}></img>
            </div>
            <div className={styles.box1}>
                <img src="/images/micro.PNG" alt="" className={styles.img}></img>
            </div>
            <div className={styles.box1}>
                <img src="/images/Caa.PNG" alt="acaa" className={styles.img} ></img>
            </div>
        </div>
    )
}
export default Social;