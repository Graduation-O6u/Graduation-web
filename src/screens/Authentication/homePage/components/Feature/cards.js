import React, { useEffect, useState } from "react";
import OR from "../../../components/or/or";
import { useNavigate } from "react-router-dom";
import styles from "../cardsHome/cards/cardshome.module.css";
import { Market_DATA_URL } from "../../../../../constants";
import "../cardsHome/sectionCards.css";
import { Icon } from "@iconify/react";

import { getTimeDifference } from "../../../../../function/calcDifference";
const Card = ({ type, joblist, idmar, setIdmar }) => {
  const navigate = useNavigate();

  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("Access Token")}`,
  });
  console.log(joblist);
  return (
    <div className="cardds2">
      {joblist.map((x, i) => {
        const idd = x["id"];

        return (
          <div class="item" key={i}>
            <div className="totitle" id={idd}>
              <div
                className="title-box"
                onClick={() => navigate(`/apply/${idd}`)}
              >
                {x["jobs"]
                  ? x["jobs"]["jobTitle"]["title"]
                  : x["jobTitle"]["title"]}
              </div>
              {x["userJobs"] ? (
                <Icon
                  icon={
                    idmar[i] && idmar[i]["userJobs"].length > 0
                      ? "ic:baseline-bookmark"
                      : "ri:bookmark-line"
                  }
                  className="icon-mark"
                  onClick={() => {
                    Market(joblist[i]["id"]);
                    if (x["userJobs"].length > 0) {
                      const k = idmar.slice();
                      k[i]["userJobs"] = [];
                      setIdmar(k);
                    } else {
                      console.log(idmar);
                      const k = idmar.slice();
                      k[i]["userJobs"].push(1);
                      setIdmar(k);
                    }
                  }}
                />
              ) : (
                <Icon
                  icon={
                    idmar[i] && idmar[i]["userJobs"].length > 0
                      ? "ic:baseline-bookmark"
                      : "ri:bookmark-line"
                  }
                  className="icon-mark"
                  onClick={() => {
                    Market(joblist[i]["id"]);
                    if (x["userJobs"].length > 0) {
                      const k = idmar.slice();
                      k[i]["userJobs"] = [];
                      setIdmar(k);
                    } else {
                      console.log(idmar);
                      const k = idmar.slice();
                      k[i]["userJobs"].push(1);
                      setIdmar(k);
                    }
                  }}
                />
              )}
            </div>
            <div className="butt-box">
              <button>{x["jobLocationType"]}</button>
              <button>{x["jobType"]}</button>
            </div>
            <div className="butt-box">
              <button>
                {x["salary"]}/{x["salaryPer"]}
              </button>
            </div>
            <OR title={getTimeDifference(x["createdAt"])} job="true" />
            <div className="company-box">
              <img
                src={x["company"]["image"]}
                alt=""
                className="iconeCompany"
                onClick={() => navigate(`/user/${x["company"]["id"]}`)}
              ></img>
              <p
                className="micro"
                onClick={() => navigate(`/user/${x["company"]["id"]}`)}
              >
                {x["company"]["name"]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
  async function Market(p) {
    await fetch(`${Market_DATA_URL}/${p}/bookmark`, {
      method: "GET",
      headers: myHeaders,
    }).then((response) => response.json());
  }
};
export default Card;
