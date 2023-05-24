import styles from "./drop.module.css";

import React, { useState, useEffect, Fragment } from "react";

const Drop = ({ label, selectedId }) => {
  const [jobs, setJobs] = useState([""]);

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <Fragment>
      <div
        className={styles.select}
        style={{
          width: localStorage.getItem("role") === "COMPANY" ? "100%" : "49%",
        }}
      >
        <select name="jobs" id="format">
          <option value="">Job Title</option>
          {}

          {jobs.map((job) => {
            return (
              <option value={job.id} selected={job.id == selectedId}>
                {" "}
                {job.title}{" "}
              </option>
            );
          })}
        </select>
      </div>
    </Fragment>
  );

  //===============================================================================================================================

  function loadJobs() {
    const JOBS_URL = "https://jobb-45md.onrender.com/auth/jobs";
    fetch(JOBS_URL)
      .then((response) => response.json())
      .then((json) => onGetJobsData(json));
  }

  function onGetJobsData(json) {
    setJobs(json.data);
  }

  //===============================================================================================================================
};
export default Drop;
