import Multiselect from "multiselect-react-dropdown";
import styles from "./drop.module.css";

import React, { useState, useEffect, Fragment } from "react";

const Drop = ({label , id , multiple}) => {
  const [jobs, setJobs] = useState([""]);
  const [cities, setCities] = useState([""]);

  useEffect(() => {
      loadJobs();
      loadCities();
  }, [])

  const data = [
    {Country: 'India' , id: 1},
    {Country: 'America' , id: 2},
    {Country: 'France' , id: 1},
    {Country: 'Germany' , id: 1}
  ]

  const [options] = useState (data);


  return (
    <Fragment>
    <div className={styles.select}>
      
    <Multiselect options={options} displayValue="Country" placeholder="Location" />
      
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
