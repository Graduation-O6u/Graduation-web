import styles from "./drop.module.css";

import React, { useState, useEffect, Fragment } from "react";

const Drop = ({ label }) => {
  const [jobs, setJobs] = useState([""]);
  const [cities, setCities] = useState([""]);

  useEffect(() => {
    loadJobs();
    loadCities();
  }, []);

  return (
    <Fragment>
      <div className={styles.select}>
        <select name="cities" id="format">
          <option selected>Country</option>
          {}

          {cities.map((city) => {
            return <option value={city.code}> {city.name} </option>;
          })}
        </select>
      </div>

      <div className={styles.select}>
        <select name="jobs" id="format">
          <option selected>Job Title</option>
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

  function loadCities() {
    const CITIES_URL =
      "https://graduation-backend-production-f50a.up.railway.app/auth/cities";
    fetch(CITIES_URL)
      .then((response) => response.json())
      .then((json) => onGetCitiesData(json));
  }

  function onGetCitiesData(json) {
    setCities(json.data);
  }

  //===============================================================================================================================
};
export default Drop;
