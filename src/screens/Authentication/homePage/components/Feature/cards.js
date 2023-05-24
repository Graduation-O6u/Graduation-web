import React, { useEffect, useState } from "react";
import OR from "../../../components/or/or";
import { useNavigate } from "react-router-dom";
import styles from "../cardsHome/cards/cardshome.module.css";
import {
  COMPANY_PROFILE_URL,
  Job_DATA_URL,
  Market_DATA_URL,
} from "../../../../../constants";
import "../cardsHome/sectionCards.css";
import { Icon } from "@iconify/react";
import LoadingPage from "../../../../../components/loadingPage/loadingPage";
import LoadingArea from "../../../../../components/loadingArea/loadingButton";
import LoadingDiv from "../../../../../components/loadingDiv/loadingDiv";
const Luxury = ({ type, filter }) => {
  const navigate = useNavigate();
  const [joblist, setjoblist] = useState([]);
  const [loading, setloading] = useState(true);
  const [look, setLook] = useState("");
  const [filterData, setfilterData] = useState("");

  const [idmar, setidmar] = useState([]);
  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("Access Token")}`,
  });
  console.log(type, look);
  if (joblist.length > 0) {
    if (type !== look) {
      //      console.log(type, look);
      Card();
      setLook(type);
    }
  }
  if (filter !== filterData) {
    Card();
    setfilterData(filter);
  }
  useEffect(() => {
    Card();
  }, []);
  function hand() {
    console.log("hhh");
  }
  return (
    <div>
      <div className={styles.luxury}>
        {!loading ? (
          <div className={styles.container}>
            {joblist.map((x, i) => {
              console.log("vvvvvvvvvvvvvvvv");
              console.log(look);

              if (look === "Saved") console.log(joblist);
              const idd = look === "Saved" ? x["jobs"]["id"] : x["id"];

              //  console.log(x["id"]);
              return (
                <div key={idd} className={styles.cardWrapper}>
                  <div className={styles.card}>
                    <div
                      className="totitle"
                      id={idd}
                      style={{
                        justifyContent:
                          localStorage.getItem("role") === "COMPANY"
                            ? "center"
                            : "spaceBetween",
                      }}
                    >
                      <div
                        className="title-box"
                        onClick={() => {
                          console.log("enter");
                          navigate(`/apply/${idd}`);
                        }}
                      >
                        {look === "Saved"
                          ? x["jobs"]["jobTitle"]["title"]
                          : x["jobTitle"]["title"]}
                      </div>
                      {localStorage.getItem("role") !== "COMPANY" ? (
                        <Icon
                          icon={
                            idmar[i] &&
                            (look === "Saved" ||
                              idmar[i]["userJobs"].length > 0)
                              ? "ic:baseline-bookmark"
                              : "ri:bookmark-line"
                          }
                          className="icon-mark"
                          onClick={() => {
                            Market(
                              look === "Saved"
                                ? joblist[i]["jobs"]["id"]
                                : joblist[i]["id"]
                            );
                            if (look !== "Saved") {
                              if (x["userJobs"].length > 0) {
                                const k = idmar.slice();
                                k[i]["userJobs"] = [];
                                setidmar(k);
                              } else {
                                console.log(idmar);
                                const k = idmar.slice();
                                k[i]["userJobs"].push(1);
                                setidmar(k);
                              }
                            } else {
                              const k = joblist.slice();
                              k.splice(i, 1);
                              setjoblist(k);
                            }
                          }}
                        />
                      ) : undefined}
                    </div>
                    <div className="butt-box">
                      <button>
                        {look === "Saved"
                          ? x["jobs"]["jobLocationType"]
                          : x["jobLocationType"]}
                      </button>
                      <button>
                        {look === "Saved" ? x["jobs"]["jobType"] : x["jobType"]}
                      </button>
                    </div>
                    <div className="butt-box">
                      <button>
                        {look === "Saved"
                          ? `${x["jobs"]["salary"]} / ${x["jobs"]["salaryPer"]}`
                          : `${x["salary"]} / ${x["salaryPer"]}`}
                      </button>
                    </div>
                    <OR title="1 hour ago" job="true" />
                    <div className="company-box">
                      <img
                        src={
                          look === "Saved"
                            ? x["jobs"]["company"]["image"]
                            : x["company"]["image"]
                        }
                        style={{
                          borderRadius: "50%",
                        }}
                        alt=""
                        className="iconeCompany"
                        onClick={() =>
                          navigate(
                            `/user/${
                              look === "Saved"
                                ? x["jobs"]["company"]["id"]
                                : x["company"]["id"]
                            }`
                          )
                        }
                      ></img>
                      <p
                        className="micro"
                        onClick={() =>
                          navigate(
                            `/user/${
                              look === "Saved"
                                ? x["jobs"]["company"]["id"]
                                : x["company"]["id"]
                            }`
                          )
                        }
                      >
                        {look === "Saved"
                          ? x["jobs"]["company"]["name"]
                          : x["company"]["name"]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <LoadingDiv />
        )}
      </div>
    </div>
  );
  async function SearchCard() {}
  async function Market(p) {
    await fetch(`${Market_DATA_URL}/${p}/bookmark`, {
      method: "GET",
      headers: myHeaders,
    }).then((response) => response.json());
  }
  function getcard(e) {
    if (e["message"] === "Unauthorized") {
      navigate("/login");
    }
    // if (joblist.length !== 0) {
    //   setidmar((listt) => [...listt, ...e["data"]["FeaturedJobs"]]);

    //   setjoblist((listt) => [...listt, ...e["data"]["FeaturedJobs"]]);
    // } else {
    //   setidmar(e["data"]["FeaturedJobs"]);

    //   setjoblist(e["data"]["FeaturedJobs"]);
    // }
    if (type === "Saved") {
      setidmar(e["data"]["savedJobs"]);

      setjoblist(e["data"]["savedJobs"]);

      console.log("-----------------------------------------");
    } else if (localStorage.getItem("role") === "COMPANY") {
      setjoblist(e["data"]["jobs"]);
    } else {
      setidmar(e["data"][`${type}`]);
      setjoblist(e["data"][`${type}`]);
    }
    setloading(false);
  }
  async function Card() {
    setloading(true);
    console.log(type);
    if (localStorage.getItem("role") === "COMPANY") {
      await fetch(`${COMPANY_PROFILE_URL}CompanyJobs`, {
        method: "GET",
        headers: myHeaders,
      })
        .then((response) => response.json())
        .then((json) => getcard(json));
    } else {
      await fetch(`${Job_DATA_URL}?type=${type}&take=20${filter}`, {
        method: "GET",
        headers: myHeaders,
      })
        .then((response) => response.json())
        .then((json) => getcard(json));
    }
  }
};
export default Luxury;
