import React, { useState, useEffect } from "react";
import "./feature.css";
import NavbarHome from "../Navbar-home";
import "bootstrap/dist/css/bootstrap.min.css";
import Drop from "./drop";
import { useNavigate } from "react-router-dom";
import { COMPANY_PROFILE_URL, Job_DATA_URL } from "../../../../../constants";
import Luxury from "../cardsHome/cards/cardsfeatured";
import Card from "./cards";
const Featured = () => {
  const navigate = useNavigate();

  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("Access Token")}`,
  });

  const [Type, setType] = React.useState("FeaturedJobs");
  const [filter, setFilter] = React.useState("");
  const [joblist, setJobList] = useState([]);
  const [idmar, setIdmar] = useState([]);
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        if (localStorage.getItem("role") === "COMPANY") {
          const response = await fetch(`${COMPANY_PROFILE_URL}CompanyJobs`, {
            method: "GET",
            headers: myHeaders,
          });
          const data = await response.json();
          getCard(data);
        } else {
          const response = await fetch(
            `${Job_DATA_URL}?type=${Type}&take=20${filter}`,
            {
              method: "GET",
              headers: myHeaders,
            }
          );
          const data = await response.json();
          getCard(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [Type, filter]); // Run effect whenever Type or filter changes

  function getCard(e) {
    if (e["message"] === "Unauthorized") {
      navigate("/login");
    }

    if (Type === "Saved") {
      setIdmar(e["data"]["savedJobs"]);
      setJobList(e["data"]["savedJobs"]);
    } else if (localStorage.getItem("role") === "COMPANY") {
      setJobList(e["data"]["jobs"]);
    } else {
      setIdmar(e["data"][`${Type}`]);
      setJobList(e["data"][`${Type}`]);
    }
  }
  const filters = [
    { title: "Featured", type: "FeaturedJobs" },
    { title: "Recommended", type: "RecommendedJobs" },
    { title: "Saved", type: "Saved" },
  ];

  return (
    <div>
      <div className="container-home">
        <NavbarHome titleHerf={"/"} type={"jobs"} />
        {localStorage.getItem("role") !== "COMPANY" && (
          <div
            style={{ width: "100%", height: "100%", padding: "0 60px" }}
            className=" smallHeader"
          >
            <div
              style={{
                display: "flex",
                gap: "50px",
                marginTop: "25px",
                marginBottom: "50px",
              }}
            >
              {filters.map((item, idx) => (
                <span
                  key={idx}
                  className="lines"
                  onClick={() => {
                    setCurrent(idx);
                    setType(filters[idx].type);
                  }}
                  style={{
                    color: current === idx ? "#0074d9" : "#bbbbbb",
                    fontWeight: current === idx ? "500" : "300",
                    textDecoration: current === idx ? "underline" : " ",
                    fontSize: "21px",
                    cursor: "pointer",
                  }}
                >
                  {item.title}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="cardds">
          <Card
            type={Type}
            joblist={joblist}
            idmar={idmar}
            setIdmar={setIdmar}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
