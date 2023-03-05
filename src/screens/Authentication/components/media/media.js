import React from "react";
import styles from "./media.module.css";
import Google from "../../images #/Google.png";
import Apple from "../../images #/Apple.png";
import Facebook from "../../images #/facebook.png";
const Media = () => {
  return (
    <div className={styles.photos}>
      <div className={styles.Img}>
        <img src={Google} title={"google login"} id={styles.pic} />
      </div>
      <div className={styles.Img}>
        <img src={Apple} title={"apple login"} id={styles.pic} />
      </div>
      <div className={styles.Img}>
        <img src={Facebook} title={"facebook login"} id={styles.pic} />
      </div>
    </div>
  );
};

export default Media;
