import React from "react";
import "../../Authentication/homePage/components/cardsHome/sectionCards.css";
import styles from "../company.module.css";
import { Icon } from "@iconify/react";
import profile from "../../../images/profile-pic.png";
import background from "../../../images/user-cover.png";

const Luxury = ({ setloading, joblist }) => {
  console.log("kkkkkkkkkkkkkkk");

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
          {joblist.map((x, i) => {
            return (
              <div
                class="item"
                style={{
                  height: "20%",
                  boxShadow: "none",

                  backgroundColor: "transparent",
                }}
              >
                <div
                  className={styles.cardWrapper}
                  id="list2"
                  style={{
                    display: "flex",
                    overflow: "scroll",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    className={styles.card}
                    id="back"
                    style={{
                      boxShadow: "2px 4px 2px #d7d7d7",
                    }}
                  >
                    <img
                      src={x["backgroundImage"]}
                      alt="card background"
                      className={styles.cardImg}
                    />
                    <img
                      src={x["image"]}
                      alt="card profile"
                      className={styles.profileImg}
                    />
                    <h1 className={styles.cardh1}>{x["name"]}</h1>
                    <p className={styles.jobTitle}>{x["job"]["title"]}</p>
                    <ul className={styles.social}>
                      {x["github"] !== "" ? (
                        <li>
                          <a href="# " className={styles.iconsocial}>
                            <Icon icon="octicon:mark-github-16" color="black" />
                          </a>
                        </li>
                      ) : undefined}
                      {x["cv"] !== "" ? (
                        <li>
                          <a href="# " className={styles.iconsocial}>
                            <Icon icon="tabler:file-cv" color="#2c6684" />
                          </a>
                        </li>
                      ) : undefined}
                      {x["behance"] !== "" ? (
                        <li>
                          <a href="# " className={styles.iconsocial}>
                            <Icon icon="devicon:behance" />
                          </a>
                        </li>
                      ) : undefined}
                    </ul>
                    <p className={styles.about}>{x["aboutme"]}</p>
                    <a className={styles.contant} href={`/user/${x["id"]}`}>
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
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
