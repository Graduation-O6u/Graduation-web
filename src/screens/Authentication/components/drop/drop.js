import ReactSelect from "react-select";
import { SERVER_LINK } from "../../../../constants";
import styles from "./drop.module.css";

import React, { useState, useEffect, Fragment } from "react";
import { fontSize } from "@mui/system";

const Drop = ({ setJob, setCountry }) => {
  const [jobs, setJobs] = useState([""]);
  const [cities, setCities] = useState([""]);

  useEffect(() => {
    loadJobs();
    loadCities();
  }, []);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%", // Set the desired width here
      height: "100%", // Set the desired width here
      border: "2px solid #4a90e2",
      borderRadius: "4px",
      boxShadow: "none",
      "&:hover": {
        border: "2px solid #4a90e2",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#4a90e2" : "transparent",
      color: state.isSelected ? "#ffffff" : "#000000",
      "&:hover": {
        backgroundColor: "#4a90e2",
        color: "#ffffff",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      borderRadius: "4px",
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "12px",
      color: "#4a90e2",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#000000",
    }),
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "5px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%" }}>
        <ReactSelect
          options={cities.map((city) => ({
            value: city.code,
            label: city.name,
          }))}
          onChange={(e) => setCountry(e.value)}
          styles={customStyles}
          placeholder="Country"
        />
      </div>
      <div style={{ width: "100%" }}>
        <ReactSelect
          options={jobs.map((job) => ({
            value: job.id,
            label: job.title,
          }))}
          onChange={(e) => setJob(e.value)}
          styles={customStyles}
          placeholder="Job Title"
        />
      </div>
    </div>
  );

  //===============================================================================================================================

  function loadJobs() {
    const JOBS_URL = `${SERVER_LINK}/auth/jobs`;
    fetch(JOBS_URL)
      .then((response) => response.json())
      .then((json) => onGetJobsData(json));
  }

  function onGetJobsData(json) {
    const data = json.data;
    data.sort((a, b) => a.title.localeCompare(b.title));

    setJobs(data);
  }

  function loadCities() {
    const CITIES_URL = `${SERVER_LINK}/auth/cities`;
    fetch(CITIES_URL)
      .then((response) => response.json())
      .then((json) => onGetCitiesData(json));
  }

  function onGetCitiesData(json) {
    setCities(json.data);
    console.log(json.data);
  }

  //===============================================================================================================================
};
export default Drop;
