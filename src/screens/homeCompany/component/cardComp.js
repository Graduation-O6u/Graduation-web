import React from "react";
import styles from "../company.module.css";
import background from "../../../images/background.jpeg";
import profile from "../../../images/avatar2.png";
import { Icon } from "@iconify/react";
const ProfileCard = () => {
  return (
    <div>
      <div className={styles.containerCard}>
        <h1 className={styles.heading}> Great Staff</h1>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <img
              src={background}
              alt="card background"
              className={styles.cardImg}
            />
            <img
              src={profile}
              alt="card profile"
              className={styles.profileImg}
            />
            <h1 className={styles.cardh1}>Amany Mohamed </h1>
            <p className={styles.jobTitle}>FrontEnd</p>
            <ul className={styles.social}>
              <li>
                <a href="# " className={styles.iconsocial}>
                  <Icon icon="octicon:mark-github-16" color="black" />
                </a>
              </li>
              <li>
                <a href="# " className={styles.iconsocial}>
                  <Icon icon="tabler:file-cv" color="#2c6684" />
                </a>
              </li>
              <li>
                <a href="# " className={styles.iconsocial}>
                  <Icon icon="devicon:behance" />
                </a>
              </li>
            </ul>
            <p className={styles.about}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <a className={styles.contant} href="# ">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
