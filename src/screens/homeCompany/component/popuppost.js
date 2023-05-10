import React, { useState, useEffect, Fragment } from "react";
import styles from "../company.module.css";
import { Icon } from "@iconify/react";
import Input from "../../Authentication/components/input/input";
function Popup() {
  const [jobs, setJobs] = useState([""]);
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
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
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
                <select name="jobs" id="format" className={styles.seel}>
                  <option selected>Job Title</option>
                  {jobs.map((job) => {
                    return <option value={job.id}> {job.title} </option>;
                  })}
                </select>
                <select
                  name="jobs"
                  id="format"
                  className={styles.seel}
                  style={{ marginLeft: "2%" }}
                >
                  <option selected small={false}>
                    Job Type
                  </option>
                  <option value=" Part_Time"> Part_Time</option>;
                  <option value=" Full_Time"> Full_Time</option>;
                  <option value="Internship"> Internship</option>;
                </select>
              </div>
              <div className={styles.select}>
                <select name="jobs" id="format" className={styles.seel}>
                  <option selected>The way of work</option>
                  <option value="On_Site"> On_Site</option>;
                  <option value=" Hybird"> Hybird</option>;
                  <option value="Remote"> Remote</option>;
                </select>
                <select
                  name="jobs"
                  id="format"
                  className={styles.seel}
                  style={{ marginLeft: "2%" }}
                >
                  <option selected small={false}>
                    Salary
                  </option>
                  <option value=" 3000"> less then 3000</option>;
                  <option value=" 6000"> less then 6000</option>;
                  <option value="9000"> less then 9000</option>;
                </select>
              </div>
              <div className={styles.select}>
                <select name="jobs" id="format" className={styles.seel}>
                  <option selected small={false}>
                    Salary Per
                  </option>
                  <option value="Day"> Day</option>;
                  <option value="Week"> Week </option>;
                  <option value="Month"> Month</option>;
                  <option value="Year"> Year</option>;
                </select>
                <select
                  name="jobs"
                  id="format"
                  className={styles.seel}
                  style={{ marginLeft: "2%" }}
                >
                  <option selected>Location</option>
                  {jobs.map((job) => {
                    return <option value={job.id}> {job.title} </option>;
                  })}
                </select>
              </div>
              <select
                name="jobs"
                id="format"
                className={styles.seel}
                style={{ marginBottom: "15px", height: "45px" }}
              >
                <option selected>Skills</option>
                {skillslist.map((x) => {
                  return <option>{x["skill"]} </option>;
                })}
              </select>
              <Input
                label={"Job describtion"}
                small={false}
                name={"Job describtion"}
                type={"text"}
              />
            </form>
            <button className={styles.saved}>Add</button>
          </div>
        </div>
      )}
    </div>
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
  function loaddlocation() {
    const JOBS_URL = "https://jobb-45md.onrender.com/auth/cities";
    fetch(JOBS_URL)
      .then((response) => response.json())
      .then((json) => onloaddlocation(json));
  }
  function onloaddlocation(json) {
    setjoblist(json.data);
  }
  //=================================================================================================================================

  function Skills() {
    const JOBS_URL = "https://jobb-45md.onrender.com/skills";
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
