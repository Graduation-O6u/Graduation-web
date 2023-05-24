import React, { useEffect, useState } from "react";
import styles from "../meeting.module.css";
import image from "../../../images/avatar1.png";
import Cutdown from "./cutdown";
import Popup from "./popup";
import { useNavigate } from "react-router-dom";

import Drop from "./drop";
import { Meeting_DATA_URL } from "../../../constants";
import LoadingPage from "../../../components/loadingPage/loadingPage";
function BodyMeeting() {
  const navigate = useNavigate();
  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("Access Token")}`,
  });

  const [pop, setpop] = useState(false);
  const [data, setdata] = useState(false);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    Card();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div>
          <div className={styles.top}>
            <h2 className={styles.h2}>Meeting</h2>
            <div className={styles.hr}></div>
          </div>
          {data.map((x) => {
            return (
              <div className={styles.usermeet} id={x["id"]}>
                <div className={styles.define}>
                  <img
                    src={
                      localStorage.getItem("role") === "USER"
                        ? x["company"]["image"]
                        : x["User"]["image"]
                    }
                    alt=""
                    className={styles.image}
                  ></img>
                  <div className={styles.name}>
                    <h3>
                      {" "}
                      {localStorage.getItem("role") === "USER"
                        ? x["company"]["name"]
                        : x["User"]["name"]}{" "}
                    </h3>
                    <p>
                      {localStorage.getItem("role") === "USER"
                        ? x["company"]["job"]["title"]
                        : x["User"]["job"]["title"]}
                    </p>
                  </div>
                </div>

                <div className={styles.cutdrop}>
                  <Cutdown setpop={setpop} data={x["date"]} />

                  {localStorage.getItem("role") === "COMPANY" &&
                  x["status"] === "Pending" ? (
                    <Popup meetId={x["id"]} />
                  ) : undefined}
                  <Drop data={x["status"]} meetId={x["id"]} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
  function getcard(e) {
    if (e["message"] === "Unauthorized") {
      navigate("/login");
    }
    console.log(e["data"]);
    setdata(e["data"]["allMeetings"]);
    setloading(false);
  }
  async function Card() {
    await fetch(`${Meeting_DATA_URL}`, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((json) => getcard(json));
  }
}
export default BodyMeeting;
