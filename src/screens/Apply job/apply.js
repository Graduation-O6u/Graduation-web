import { React, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import styles from "../Apply job/apply.module.css";
import Navbarr from "../Authentication/homePage/components/Navbar-home";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { Timeit } from "react-timeit";
import Congrats from "../../components/congratulation/congratualtion";
import Sure from "../../components/sure/congratualtion";
import "react-responsive-datepicker/dist/index.css";

import { APPLAY_JOB_URL, GET_JOB_URL } from "../../constants";
import LoadingPage from "../../components/loadingPage/loadingPage";
import CardUser from "../homeCompany/component/cardUser";
import DateModel from "../../components/date/date";
const Apply = () => {
  const [isPopupShown, setIsPopupShown] = useState(false);
  const [isPopupShown3, setIsPopupShown3] = useState(false);
  const [users, setUsers] = useState(false);
  const [users2, setUsers2] = useState([]);

  const [loading, setloading] = useState(true);
  const [job, setJob] = useState(null);
  const [Applay, setApplay] = useState(false);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("role") === "COMPANY") getData2();
    getData();
  }, []);

  const showPopup = () => {
    setIsPopupShown(!isPopupShown);
  };

  const [isPopupShown2, setIsPopupShown2] = useState(false);
  const showPopup2 = () => {
    setIsPopupShown2(!isPopupShown2);
  };
  function calcLocation(id, allData) {
    console.log(id);
    console.log(allData);
    allData.forEach((x) => {
      console.log(x["id"], id, x["name"]);
      // if (x["id"] === id) {
      // setLoc(x["name"]);
      return "x[name";
      // }
    });
  } //
  const role = localStorage.getItem("role");
  if (job) {
    console.log(
      calcLocation(
        job["job"]["companyLocationId"],
        job["job"]["company"]["companyLocation"]
      )
    );
  }
  return (
    <div className={styles.body}>
      {!loading ? (
        <div>
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
                <h2 className={styles.H2}>
                  {" "}
                  {job["job"]["jobTitle"]["title"]}
                </h2>
                {role === "COMPANY" ? (
                  <p className={styles.parag} onClick={() => setUsers(true)}>
                    {job["numberOfApplicants"]} Applicants
                  </p>
                ) : undefined}
                <button
                  disabled={Applay ? true : false}
                  onClick={role === "COMPANY" ? Delete : applay}
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
            {!users ? (
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
                        src={job["job"]["company"]["image"]}
                        style={{
                          width: "50px",
                          borderRadius: "50%",
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
                          {job["job"]["company"]["name"]}
                        </h3>
                        <h5
                          style={{
                            color: "#999999",

                            width: "100%",
                          }}
                        >
                          {job["job"]["company"]["job"]["title"]}
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
                          {job["job"]["jobLocationType"]}{" "}
                          {job["job"]["jobType"]}
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
                          {job["job"]["salary"]}/{job["job"]["salaryPer"]}
                        </span>
                      </div>
                    </div>
                    <p
                      style={{
                        width: "100%",
                        color: "#9F9F9F",
                      }}
                    >
                      {job["job"]["jobDescription"]}
                    </p>
                  </div>
                </div>
                <hr className={styles.hrr2} />
                <div className={styles.pcontainer}>
                  {job["job"]["jobSkills"].map((x, i) => {
                    return (
                      <div className={styles.plang}>{x["skill"]["skill"]}</div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {users2.map((user) => {
                  return (
                    <CardUser
                      setShow={setShow}
                      setUserId={setUserId}
                      data={user}
                    />
                  );
                })}
              </div>
            )}
            <DateModel
              show={show}
              date={date}
              setDate={setDate}
              userId={userId}
              users={users2}
              setShow={setShow}
              setUsers={setUsers}
            />
            <Sure show={isPopupShown3} onHide={() => setIsPopupShown3(false)} />
            <Congrats
              show={isPopupShown}
              onHide={() => setIsPopupShown(false)}
            />
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );

  function getData() {
    console.log("sssssssssssssssssssssssss");
    setloading(true);

    const token = localStorage.getItem("Access Token");
    const id = window.location.href.split("/").pop();
    fetch(GET_JOB_URL + "/" + id, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((json) => onGetProfileData(json));
  }

  function onGetProfileData(json) {
    setJob(json.data);
    console.log(json.data);

    console.log(job);
    if (job) {
      calcLocation(
        job["job"]["companyLocationId"],
        job["job"]["company"]["companyLocation"]
      );

      if (role === "USER" && job["applayJob"]) {
        setApplay(true);
      }
    }
    setloading(false);

    // window.alert(json.data.user.email);
  }
  function getData2() {
    const token = localStorage.getItem("Access Token");
    const id = window.location.href.split("/").pop();
    fetch(GET_JOB_URL + "/" + id + "/Applicants", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((json) => onGetProfileData2(json));
  }

  function onGetProfileData2(json) {
    setUsers2(json.data);
    console.log(json.data);

    // window.alert(json.data.user.email);
  }

  function applay() {
    setApplay(true);
    console.log("pppp");
    const token = localStorage.getItem("Access Token");
    const id = window.location.href.split("/").pop();
    fetch(APPLAY_JOB_URL + "/" + id + "/applay", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((json) => onGetData(json));
  }

  function onGetData(json) {
    console.log(json.type);
    setApplay(true);
    showPopup();
    // window.alert(json.data.user.email);
  }

  function Delete() {
    console.log("pppp");
    setIsPopupShown3(true);
  }
};

export default Apply;
