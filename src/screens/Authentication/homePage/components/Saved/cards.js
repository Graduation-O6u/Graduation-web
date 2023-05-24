import React, { useEffect, useState } from "react";
import OR from "../../../components/or/or";
import { useNavigate } from "react-router-dom";
import styles from "../cardsHome/cards/cardshome.module.css";
import { Job_DATA_URL } from "../../../../../constants";
import "../cardsHome/sectionCards.css";
import { Icon } from "@iconify/react";
const Luxury = () => {
  const navigate = useNavigate();
  const [joblist, setjoblist] = useState([]);
  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("Access Token")}`,
  });
  useEffect(() => {
    Card();
  }, []);
  return (
    <div>
      <div className={styles.luxury}>
        <div className={styles.container}>
          {joblist.map((x) => {
            console.log(x);
            return (
              <div className={styles.cardWrapper}>
                <div className={styles.card}>
                  <div className="totitle">
                    <div className="title-box">
                      {x["jobs"]["jobTitle"]["title"]}
                    </div>
                    <Icon icon="ic:baseline-bookmark" className="icon-mark" />
                  </div>
                  <div className="butt-box">
                    <button>{x["jobs"]["jobLocationType"]}</button>
                    <button>{x["jobs"]["jobType"]}</button>
                  </div>
                  <div className="butt-box">
                    <button>
                      {x["jobs"]["salary"]}/{x["jobs"]["salaryPer"]}
                    </button>
                  </div>
                  <OR title="1 hour ago" job="true" />
                  <div className="company-box">
                    <Icon icon="logos:microsoft-icon" className="mic" />
                    <p className="micro">{x["jobs"]["company"]["name"]}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  function getcard(e) {
    if (e["message"] === "Unauthorized") {
      navigate("/login");
    }
    setjoblist(e["data"]["savedJobs"]);
  }
  async function Card() {
    await fetch(`${Job_DATA_URL}?type=Saved&take=20`, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((json) => getcard(json));
  }
};
export default Luxury;
