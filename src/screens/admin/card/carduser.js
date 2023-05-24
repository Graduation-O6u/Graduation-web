import React from "react";
import "../../Authentication/homePage/components/cardsHome/sectionCards.css";
import { Icon } from "@iconify/react";
import styles from "../../homeCompany/company.module.css";
import background from "../../../images/background.jpeg";
import profile from "../../../images/avatar2.png";
const Luxury = () => {
  const handleNextClick = () => {
    const widthItem = document.querySelector(".item").offsetWidth;
    document.getElementById("formList").scrollLeft += widthItem;
  };
  const handlePrevClick = () => {
    const widthItem = document.querySelector(".item").offsetWidth;
    document.getElementById("formList").scrollLeft -= widthItem;
  };
  return (
    <div>
      <div id="formList">
        <div id="list">
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
      <div className="arrow">
        <button onClick={handlePrevClick}>
          <Icon
            icon="material-symbols:arrow-circle-left-sharp"
            className="ar"
          />
        </button>
        <button onClick={handleNextClick}>
          <Icon icon="material-symbols:arrow-circle-right" className="ar" />
        </button>
      </div>
      <div />
    </div>
  );
};
export default Luxury;
