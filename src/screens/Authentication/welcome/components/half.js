import React from "react";
import styles from "../welcome.module.css";
const Half = () => {
  return (
    <div className={styles.halfPage}>
      <div className={styles.topImgText}>
        <img src="/images/photoo.png" alt=""></img>
        <div className={styles.who}>
          <p>Who We Are</p>
        </div>
      </div>
      <p className={styles.prag}>
        a network of software development job openings to assist developers in
        finding a job and company that they enjoy. We understand how difficult
        it can be to find the right job, especially if you don't know where to
        begin looking. That is why we created I Need Dev, a one-stop shop for
        all software development requirements. And we are not limited to a
        specific location; we have a global reach and can assist you in finding
        your dream job no matter where you are in the world. If you're looking
        for your next big career move, start here.
      </p>
    </div>
  );
};
export default Half;
