import styles from "./drop.module.css";

import React, { useState, useEffect, Fragment } from "react";

const Drop = ({label , id , multiple}) => {
  const [jobs, setJobs] = useState([""]);
  const [cities, setCities] = useState([""]);

  useEffect(() => {
      loadJobs();
      loadCities();
  }, [])


  return (
    <Fragment>
    <div className={styles.select}>
      <select name="cities" id={id} className={styles.droper} label={label} multiple={multiple}>
        <option selected>{label}</option>
        {}

        {cities.map((city) => {
          return <option value={city.code}> {city.name} </option>;
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

  function loadCities() {
      const CITIES_URL = "https://jobb-45md.onrender.com/auth/cities";
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
