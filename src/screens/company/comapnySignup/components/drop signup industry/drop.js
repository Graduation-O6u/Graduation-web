import { Title_DATA_URL } from "../../../../../constants";
import styles from "./drop.module.css";

import React, { useState, useEffect, Fragment } from "react";

const DropIndustry = ({ label, id, multiple }) => {
  const [jobs, setJobs] = useState([""]);

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <Fragment>
      <div className={styles.select}>
        <select name="jobs" id="format">
          <option selected>Industry</option>
          {}

          {jobs.map((job) => {
            return <option value={job.id}> {job.title} </option>;
          })}
        </select>
      </div>
    </Fragment>
  );

  //===============================================================================================================================

  function loadJobs() {
    fetch(Title_DATA_URL)
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
export default DropIndustry;
