import React, { useState, useEffect, Fragment } from "react";
import styles from "../company.module.css";
import { Icon } from "@iconify/react";
import Input from "../../Authentication/components/input/input";
import { GET_JOB_URL, COMPANY_PROFILE_URL } from "../../../constants";
function Popup() {
  const [jobs, setJobs] = useState([""]);
  const [cities, setcities] = useState([]);

  const [joblist, setjoblist] = useState([]);
  const [skillslist, setskillslist] = useState([]);
  useEffect(() => {
    loadJobs();
    loaddlocation();
    Skills();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    console.log(e.target.job.value);
    // console.log(e.target.jobType.value);
    // console.log(e.target.way.value);
    // console.log(e.target.salary.value);
    // console.log(e.target.salaryPer.value);
    // console.log(e.target.locations.value);
    console.log(e.target.skills.value);
    console.log(e.target.describtion.value);
    const person = {
      jobType: e.target.jobType.value,
      jobLocationType: e.target.way.value,
      salary: parseInt(e.target.salary.value),
      salaryPer: e.target.salaryPer.value,
      jobLocationId: e.target.locations.value,
      jobSkillId: [e.target.skills.value],
      jobTitleId: e.target.job.value,
      jobDescription: e.target.describtion.value,
    };
    console.log(person);

    let requestJson = JSON.stringify(person);

    var token = localStorage.getItem("Access Token");
    fetch(GET_JOB_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: requestJson,
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    setIsOpen(false);
  };
  return (
    <div className={styles.po}>
      <button onClick={() => setIsOpen(true)} className={styles.butte}>
        posting new job
      </button>
      {isOpen && (
        <div className={styles.popup}>
          <div className={styles.content}>
            <button className={styles.button} onClick={() => setIsOpen(false)}>
              <Icon icon="ic:baseline-close" className={styles.ico} />
            </button>
            <div>
              <div className={styles.top}>
                <h3 className={styles.newpost}>New posting</h3>
                <hr className={styles.hrpost}></hr>
              </div>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.select}>
                <select name="job" id="format" className={styles.seel}>
                  <option selected>Job Title</option>
                  {jobs.map((job) => {
                    return (
                      <option name="jobId" value={job.id}>
                        {" "}
                        {job.title}{" "}
                      </option>
                    );
                  })}
                </select>
                <select
                  name="jobType"
                  id="format"
                  className={styles.seel}
                  style={{ marginLeft: "2%" }}
                >
                  <option selected small={false}>
                    Job Type
                  </option>
                  <option value="Part_Time">Part_Time</option>;
                  <option value="Full_Time">Full_Time</option>;
                  <option value="Internship">Internship</option>;
                </select>
              </div>
              <div className={styles.select}>
                <select name="way" id="format" className={styles.seel}>
                  <option selected>The way of work</option>
                  <option value="On_Site">On_Site</option>;
                  <option value="Hybrid">Hybird</option>;
                  <option value="Remote">Remote</option>;
                </select>
                <select
                  name="salary"
                  id="format"
                  className={styles.seel}
                  style={{ marginLeft: "2%" }}
                >
                  <option selected small={false}>
                    Salary
                  </option>
                  <option value="3000">less then 3000</option>;
                  <option value="6000">less then 6000</option>;
                  <option value="9000">less then 9000</option>;
                </select>
              </div>
              <div className={styles.select}>
                <select name="salaryPer" id="format" className={styles.seel}>
                  <option selected small={false}>
                    Salary Per
                  </option>
                  <option value="Day">Day</option>;
                  <option value="Hour">Hour </option>;
                  <option value="Month">Month</option>;
                  <option value="Year">Year</option>;
                </select>
                <select
                  name="locations"
                  id="format"
                  className={styles.seel}
                  style={{ marginLeft: "2%" }}
                >
                  <option selected>Location</option>
                  {cities.map((job) => {
                    return <option value={job.id}> {job.name} </option>;
                  })}
                </select>
              </div>
              <select
                name="skills"
                id="format"
                className={styles.seel}
                style={{ marginBottom: "15px", height: "45px" }}
              >
                <option selected>Skills</option>
                {skillslist.map((x) => {
                  return <option value={x["id"]}>{x["skill"]} </option>;
                })}
              </select>
              <Input
                label={"Job describtion"}
                small={false}
                name={"describtion"}
                type={"text"}
              />
              <button className={styles.saved} type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
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
    setJobs(json.data);
  }
  //===============================================================================================================================
  function loaddlocation() {
    const JOBS_URL = COMPANY_PROFILE_URL + "CompanyLocations";
    var token = localStorage.getItem("Access Token");
    fetch(JOBS_URL, {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => onloaddlocation(json["data"]["companyLocation"]));
  }
  function onloaddlocation(json) {
    console.log("//////////////////////////");
    console.log(json);
    setcities(json);
  }
  //=================================================================================================================================

  function Skills() {
    const JOBS_URL =
      "https://graduation-backend-production-f50a.up.railway.app/skills";
    fetch(JOBS_URL)
      .then((response) => response.json())
      .then((json) => onlskill(json));
  }
  function onlskill(json) {
    setskillslist(json.data);
  }

  //=================================================================================================================================
}

export default Popup;
