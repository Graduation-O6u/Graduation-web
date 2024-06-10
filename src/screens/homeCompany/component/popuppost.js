import React, { useState, useEffect, Fragment } from "react";
import styles from "../company.module.css";
import { Icon } from "@iconify/react";
import Input from "../../Authentication/components/input/input";
import {
  GET_JOB_URL,
  COMPANY_PROFILE_URL,
  SERVER_LINK,
} from "../../../constants";

import ReactSelect from "react-select";
import { toast } from "react-toastify";
function Popup() {
  const [jobs, setJobs] = useState([""]);
  const [cities, setcities] = useState([]);
  const [skills, setSkills] = useState([]);
  const [job, setJob] = useState("");
  const [joblist, setjoblist] = useState([]);
  const [skillslist, setskillslist] = useState([]);
  useEffect(() => {
    loadJobs();
    loaddlocation();
    Skills();
  }, []);
  const notify = async (error) => toast.success(error);
  const notify2 = async (error) => toast.error(error);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%", // Set the desired width here
      height: "100%", // Set the desired width here
      border: "2px solid #d3d0d0",
      borderRadius: "4px",
      backgroundColor: "#fafafa",
      color: "#929292",
      boxShadow: "none",
      "&:hover": {
        border: "2px solid #d3d0d0",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#d3d0d0" : "transparent",
      color: state.isSelected ? "#ffffff" : "#000000",
      "&:hover": {
        backgroundColor: "#d3d0d0",
        color: "#929292",
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
      color: "#929292",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#000000",
    }),
  };

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const person = {
      jobType: e.target.jobType.value,
      jobLocationType: e.target.way.value,
      salary: parseInt(e.target.salary.value),
      salaryPer: e.target.salaryPer.value,
      jobLocationId: e.target.locations.value,
      jobSkillId: skills,
      jobTitleId: job,
      jobDescription: e.target.describtion.value,
    };
    console.log(person);
    if (person.jobTitleId === "") {
      return notify2("jobTitle mustn't be empty");
    }
    if (person.jobLocationId === "Location") {
      return notify2("Location mustn't be empty");
    }
    if (person.jobLocationType === "The way of work") {
      return notify2("Way of work mustn't be empty");
    }
    if (person.jobSkillId.length === 0) {
      return notify2("Please choose any skill");
    }
    if (person.jobType === "Job Type") {
      return notify2("job type mustn't be empty");
    }
    if (person.salaryPer === "Salary Per") {
      return notify2("Salary per mustn't be empty");
    }
    let requestJson = JSON.stringify(person);

    var token = localStorage.getItem("Access Token");
    await fetch(GET_JOB_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: requestJson,
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.type === "Success") {
          setIsOpen(false);
          setJob("");
          setSkills([]);
          return notify("Post job successfully");
        } else {
          return notify2(json.message[0]);
        }
      });
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
                {/* <select name="job" id="format" className={styles.seel}>
                  <option selected>Job Title</option>
                  {jobs.map((job) => {
                    return (
                      <option name="jobId" value={job.id}>
                        {" "}
                        {job.title}{" "}
                      </option>
                    );
                  })}
                </select> */}
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
              <div style={{ width: "100%", marginBottom: "10px" }}>
                <ReactSelect
                  options={skillslist.map((skill) => ({
                    value: skill.id,
                    label: skill.skill,
                  }))}
                  isMulti
                  onChange={(e) => setSkills(e.map((item) => item.value))}
                  styles={customStyles}
                  placeholder="Skills"
                />
              </div>

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
    const JOBS_URL = `${SERVER_LINK}/auth/jobs`;
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
    const JOBS_URL = `${SERVER_LINK}/skills`;
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
