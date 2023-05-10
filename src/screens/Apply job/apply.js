import { React, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "../Apply job/apply.module.css";
import Navbarr from "../Authentication/homePage/components/Navbar-home";
import logo from "../../images/logo.png";
import Congrats from "../../components/congratulation/congratualtion";
const Apply = () => {
  const [isPopupShown, setIsPopupShown] = useState(false);
  const showPopup = () => {
    setIsPopupShown(!isPopupShown);
  };

  const [isPopupShown2, setIsPopupShown2] = useState(false);
  const showPopup2 = () => {
    setIsPopupShown2(!isPopupShown2);
  };

  const role = localStorage.getItem("role");
  return (
    <div className={styles.body}>
      <Navbarr />
      <div className={styles.container}>
        <div className={styles.applyline}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2 className={styles.H2}> Nodejs Developer</h2>
            {role === "COMPANY" ? (
              <p className={styles.parag}>150 Applicants</p>
            ) : undefined}
            <button
              onClick={role === "COMPANY" ? showPopup2 : showPopup}
              className={styles.submit}
              style={{
                backgroundColor: role === "COMPANY" ? "#FF0000" : "#0074d9",
              }}
            >
              {role === "COMPANY" ? "Delete" : "Applay"}
            </button>
          </div>
          <hr
            style={{
              color: "#969696",
            }}
          />
        </div>
        <div className={styles.all}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
            }}
          >
            <div className={styles.data}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {" "}
                <img
                  src={logo}
                  style={{
                    width: "50px",
                  }}
                  alt="logo"
                />
                <div className={styles.info}>
                  <h3
                    style={{
                      fontWeight: "bold",
                      color: "#222222",
                    }}
                  >
                    Microsoft
                  </h3>
                  <h5
                    style={{
                      color: "#999999",

                      width: "100%",
                    }}
                  >
                    Software Development
                  </h5>
                </div>
              </div>
              <div
                style={{
                  margin: "5% 0%",
                }}
              >
                <div
                  style={{
                    margin: "5% 0%",
                  }}
                >
                  <Icon
                    icon="ic:baseline-location-city"
                    style={{
                      color: "#9F9F9F",
                      fontSize: "24px",
                      marginLeft: "24px",
                    }}
                  />
                  <span
                    style={{
                      color: "#9F9F9F",
                      fontWeight: "500",
                    }}
                  >
                    Egypt
                  </span>
                </div>

                <div
                  style={{
                    margin: "5% 0%",
                  }}
                >
                  <Icon
                    icon="ph:bag-simple-fill"
                    style={{
                      color: "#9F9F9F",
                      fontSize: "24px",
                      marginLeft: "24px",
                    }}
                  />
                  <span
                    style={{
                      color: "#9F9F9F",
                      fontWeight: "500",
                    }}
                  >
                    On_Site Part_Time
                  </span>
                </div>

                <div>
                  <Icon
                    icon="material-symbols:attach-money"
                    style={{
                      color: "#9F9F9F",
                      fontSize: "24px",
                      marginLeft: "24px",
                    }}
                  />
                  <span
                    style={{
                      color: "#9F9F9F",
                      fontWeight: "500",
                    }}
                  >
                    2000/Month
                  </span>
                </div>
              </div>
              <p
                style={{
                  width: "100%",
                  color: "#9F9F9F",
                }}
              >
                A network of software development job openings to assist
                developers in finding a job and company that they enjoy. We
                understand how difficult it can be to find the right job,
                especially if you don't know where to begin looking. That is why
                we created I Need Dev, a one-stop shop for all software
                development requirements. And we are not limited to a specific
                location.
              </p>
            </div>
          </div>
          <hr className={styles.hrr} />
          <div className={styles.pcontainer}>
            <div className={styles.plang}>Reactjs</div>
            <div className={styles.plang}>Pugjs</div>
            <div className={styles.plang}>Angularjs</div>
            <div className={styles.plang}>PHP</div>
            <div className={styles.plang}>Javascript</div>
            <div className={styles.plang}>TypeScript</div>
            <div className={styles.plang}>C++</div>
            <div className={styles.plang}>C#</div>
            <div className={styles.plang}>Python</div>
            <div className={styles.plang}>Django</div>
            <div className={styles.plang}>Nodejs</div>
            <div className={styles.plang}>Viewjs</div>
            <div className={styles.plang}>Ruby</div>
            <div className={styles.plang}>.Net</div>
            <div className={styles.plang}>Kotlin</div>
          </div>
        </div>

        <Congrats show={isPopupShown} onHide={() => setIsPopupShown(false)} />
      </div>
    </div>
  );
};

export default Apply;
