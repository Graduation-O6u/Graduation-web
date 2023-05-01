import React, { useEffect, useState } from "react";
import OR from "../../../../components/or/or";
import { useNavigate } from "react-router-dom";
import "../sectionCards.css";
import { Job_DATA_URL, Market_DATA_URL } from "../../../../../../constants";
import { Icon } from "@iconify/react";
const Luxury = () => {
  const navigate = useNavigate();
  const [joblist, setjoblist] = useState([]);
  const [sizeall, setsizeall] = useState(0);
  const [idmar, setidmar] = useState([]);
  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("Access Token")}`,
  });
  useEffect(() => {
    Card();
  }, []);
  const NextClick = () => {
    const widthItem = document.querySelector(".item2").offsetWidth;
    document.getElementById("formList2").scrollLeft += widthItem;
    Card();
  };
  const PrevClick = () => {
    const widthItem = document.querySelector(".item2").offsetWidth;
    document.getElementById("formList2").scrollLeft -= widthItem;
  };

  return (
    <div>
      <div id="formList2">
        <div id="list2">
          {joblist.map((x, i) => {
            const idd = x["id"];
            return (
              <div class="item2">
                <div className="totitle" id={idd}>
                  <div className="title-box">{x["jobTitle"]["title"]}</div>
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
                        setidmar(k);
                      } else {
                        console.log(idmar);
                        const k = idmar.slice();
                        k[i]["userJobs"].push(1);
                        setidmar(k);
                      }
                    }}
                  />
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
                <OR title="1 hour ago" job="true" />
                <div className="company-box">
                  <Icon icon="logos:microsoft-icon" className="mic" />
                  <p className="micro">{x["company"]["name"]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="arrow">
        <button onClick={PrevClick}>
          <Icon
            icon="material-symbols:arrow-circle-left-sharp"
            className="ar"
          />
        </button>
        <button onClick={NextClick}>
          <Icon icon="material-symbols:arrow-circle-right" className="ar" />
        </button>
      </div>
      <div />
    </div>
  );

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
    if (joblist.length !== 0) {
      setidmar((listt) => [...listt, ...e["data"]["RecommendedJobs"]]);

      setjoblist((listt) => [...listt, ...e["data"]["RecommendedJobs"]]);
    } else {
      setidmar(e["data"]["RecommendedJobs"]);

      setjoblist(e["data"]["RecommendedJobs"]);
    }
    setsizeall(e["data"]["size"]);
  }
  async function Card() {
    let takee = 6;
    if (joblist.length !== 0) {
      takee = Math.min(sizeall - joblist.length, 6);
    }
    if (joblist.length < sizeall || sizeall === 0) {
      await fetch(
        `${Job_DATA_URL}?type=RecommendedJobs&take=${takee}&skip=${joblist.length}`,
        {
          method: "GET",
          headers: myHeaders,
        }
      )
        .then((response) => response.json())
        .then((json) => getcard(json));
    }
  }
};
export default Luxury;
