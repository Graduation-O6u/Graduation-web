import React, { useEffect, useState } from "react";
import OR from "../../../../components/or/or";
import { useNavigate } from "react-router-dom";
import "../sectionCards.css";
import {
  Job_DATA_URL,
  Job_SEARCH_URL,
  Market_DATA_URL,
} from "../../../../../../constants";
import { Icon } from "@iconify/react";
const Luxury = ({ searchQuery }) => {
  const navigate = useNavigate();
  const [joblist, setjoblist] = useState([]);
  const [sizeall, setsizeall] = useState(0);
  const [idmar, setidmar] = useState([]);
  const [last, setLast] = useState("");

  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("Access Token")}`,
  });
  if (last !== searchQuery) {
    Card();
    setLast(searchQuery);
  }
  useEffect(() => {
    Card();
  }, []);
  const handleNextClick = () => {
    const widthItem = document.querySelector(".item").offsetWidth;
    document.getElementById("formList").scrollLeft += widthItem;
    if (searchQuery === "") {
      Card();
    }
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
            const idd = x["id"];
            return (
              <div class="item">
                <div className="totitle" id={idd}>
                  <div
                    className="title-box"
                    onClick={() => navigate(`/apply/${idd}`)}
                  >
                    {x["jobTitle"]["title"]}
                  </div>
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

  async function Market(p) {
    await fetch(`${Market_DATA_URL}/${p}/bookmark`, {
      method: "GET",
      headers: myHeaders,
    }).then((response) => response.json());
  }
  function getcard(e) {
    console.log(e);
    if (e["message"] === "Unauthorized") {
      navigate("/login");
    }
    if (searchQuery === "") {
      if (joblist.length !== 0) {
        setidmar((listt) => [...listt, ...e["data"]["FeaturedJobs"]]);

        setjoblist((listt) => [...listt, ...e["data"]["FeaturedJobs"]]);
      } else {
        setidmar(e["data"]["FeaturedJobs"]);

        setjoblist(e["data"]["FeaturedJobs"]);
      }

      setsizeall(e["data"]["size"]);
    } else {
      setjoblist(e["data"]);
    }
  }
  async function Card() {
    if (searchQuery === "") {
      let takee = 6;
      if (joblist.length !== 0) {
        takee = Math.min(sizeall - joblist.length, 6);
      }
      if (joblist.length < sizeall || sizeall === 0) {
        await fetch(
          `${Job_DATA_URL}?type=FeaturedJobs&take=${takee}&skip=${joblist.length}`,
          {
            method: "GET",
            headers: myHeaders,
          }
        )
          .then((response) => response.json())
          .then((json) => getcard(json));
      }
    } else {
      const person = {
        searchData: searchQuery,
      };

      let requestJson = JSON.stringify(person);

      console.log(Job_SEARCH_URL);
      await fetch(`${Job_SEARCH_URL}`, {
        method: "POST",
        body: requestJson,

        headers: myHeaders,
      })
        .then((response) => response.json())
        .then((json) => getcard(json));
    }
  }
};
export default Luxury;
