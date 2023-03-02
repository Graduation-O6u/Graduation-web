import React from "react";
import styles from "../Home.module.css"
const Boximage = () => {
    return (
        <div className={styles.boxImage}>
            <img src="/images/photo2.jpg" className={styles.img2} alt="" ></img>
            <img src="/images/photo3.jpg" className={styles.img3} alt="" ></img>
            <img src="/images/photo1.jpg" className={styles.img1} alt="" ></img>
        </div>
    )
}
export default Boximage;