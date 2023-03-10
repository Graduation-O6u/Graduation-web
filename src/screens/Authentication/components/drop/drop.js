import styles from "./drop.module.css";

import React, { useState, useEffect, Fragment } from "react";

const Drop = ({label}) => {
  const [jobs, setJobs] = useState([""]);
  const [cities, setCities] = useState([""]);

  useEffect(() => {
      loadJobs();
      loadCities();
  }, [])


  return (
    <Fragment>
    <div className={styles.select}>
      <select name="format" id="format">
        <option selected>Country</option>
        {}

        {cities.map((city) => {
          return <option value={city.code}> {city.name} </option>;
        })}
      </select>
    </div>

    
    <div className={styles.select}>
      <select name="format" id="format">
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
    const JOBS_URL = "https://graduation-backend-production.up.railway.app/auth/jobs";
    fetch(JOBS_URL)
        .then((response) => response.json())
        .then((json) => onGetJobsData(json));
}

function onGetJobsData(json) {
    setJobs(json.data);
}

function loadCities() {
    const CITIES_URL = "https://graduation-backend-production.up.railway.app/auth/cities";
    fetch(CITIES_URL)
        .then((response) => response.json())
        .then((json) => onGetCitiesData(json));
}

function onGetCitiesData(json) {
    setCities(json.data);
}


function getDataAndSignUp() {

    const person = {
        name: "",
        email: "",
        password: "",
        jobId: "",
        cityId: ""
    };


    const SIGN_UP_URL = "https://graduation-backend-production.up.railway.app/auth/signup";
    fetch(SIGN_UP_URL, {
        method: "POST",
        body: JSON.stringify(person)
    })
        .then((response) => response.json())
        .then((json) => onGetSignUpResponse(json));
}

function onGetSignUpResponse(json) {
    let status = json.type;
    if (status == "Success") {
        window.alert("success signup");
    } else {
        window.alert("Error Happened");
    }
}

};
export default Drop;
