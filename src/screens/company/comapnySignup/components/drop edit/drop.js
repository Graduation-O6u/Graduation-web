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
    const JOBS_URL =
      "https://graduation-backend-production-f50a.up.railway.app/auth/jobs";
    fetch(JOBS_URL)
      .then((response) => response.json())
      .then((json) => onGetJobsData(json));
  }

  function onGetJobsData(json) {
    const data = json.data;
    data.sort((a, b) => a.title.localeCompare(b.title));

    setJobs(data);
  }

  //===============================================================================================================================
};
export default Drop;
