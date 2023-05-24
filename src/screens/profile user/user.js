import React, { useState, useEffect } from "react";

import Navbarr from "../Authentication/homePage/components/Navbar-home";
import BoxFill from "./components/box";

import styles from "../profile user/user.module.css";
import { Job_DATA_URL, PROFILE_DATA_URL } from "../../constants";
import Input from "../Authentication/components/input/input";
import Drop from "../company/comapnySignup/components/drop edit/drop";
import DropLoc from "../company/comapnySignup/components/drop signup location/droploc";
import { CardProfile } from "./components/cardProfile";
import LoadingPage from "../../components/loadingPage/loadingPage";
import InfoCompany from "./components/infoCompany";
const User = () => {
  const id =
    window.location.href.split("/").pop() === "user"
      ? localStorage.getItem("id")
      : window.location.href.split("/").pop();
  const [user, setUser] = useState(null);
  const [job, setJob] = useState(null);
  const [job2, setJob2] = useState(null);

  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);

  useEffect(() => {
    getProfileData();
  }, []);

  const [isPopupShown, setIsPopupShown] = useState(false);
  const showHidePopup = () => {
    setIsPopupShown(!isPopupShown);
  };

  function popup() {
    return (
      <>
        <div id={styles.loginModal}>
          <div className={styles.modal}>
            <div className={styles.header}>
              <h5>Edit profile</h5>
              <div onClick={showHidePopup} className={styles.close}>
                x
              </div>
            </div>
            <form
              className={styles.edit}
              onSubmit={
                localStorage.getItem("role") === "COMPANY"
                  ? editProfile2
                  : editProfile
              }
            >
              <Input
                label={"Name"}
                small={false}
                name={"name"}
                type={"text"}
                defaultValue={user["user"]["name"]}
                req={"required"}
              />
              <Input
                label={"About"}
                small={false}
                name={"about"}
                type={"text"}
                defaultValue={user["user"]["aboutme"]}
                req={"required"}
              />
              <div className={styles.small}>
                <Drop selectedId={user["user"]["jobId"]} />
                {localStorage.getItem("role") !== "COMPANY" ? (
                  <DropLoc
                    selectedId={user["user"]["cityId"]}
                    label={"Location"}
                    id={styles.small}
                  />
                ) : undefined}
              </div>
              <Input
                label={
                  localStorage.getItem("role") === "COMPANY"
                    ? "Website Url"
                    : " Your CV URL"
                }
                small={false}
                name={"cv"}
                type={"text"}
                defaultValue={
                  localStorage.getItem("role") === "COMPANY"
                    ? user["user"]["companyDetails"]["websiteUrl"]
                    : user["user"]["cv"]
                }
                req={"required"}
              />
              <div className={styles.small}>
                <Input
                  label={
                    localStorage.getItem("role") === "COMPANY"
                      ? "History"
                      : "Your Behance URL"
                  }
                  small={true}
                  name={"behance"}
                  type={"text"}
                  defaultValue={
                    localStorage.getItem("role") === "COMPANY"
                      ? user["user"]["companyDetails"]["history"]
                      : user["user"]["behance"]
                  }
                />
                <Input
                  label={
                    localStorage.getItem("role") === "COMPANY"
                      ? "marketing Value"
                      : "Your GitHub URL"
                  }
                  small={true}
                  name={"github"}
                  type={"text"}
                  defaultValue={
                    localStorage.getItem("role") === "COMPANY"
                      ? user["user"]["companyDetails"]["marketingValue"]
                      : user["user"]["github"]
                  }
                />
              </div>

              <button type="submit" className={styles.save}>
                Save
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      {!loading && !loading2 && !loading3 ? (
        <div className={styles.container}>
          {isPopupShown && popup()}

          <Navbarr />
          <hr
            style={{
              color: "#969696",
            }}
          />
          <div className={styles.child}>
            <div className={styles.left}>
              <CardProfile
                user={user}
                setIsPopupShown={setIsPopupShown}
                setUser={setUser}
              />
              {user["user"]["role"] !== "COMPANY" ? (
                <div
                  style={{
                    marginTop: "2.5%",
                    marginBottom: "2.5%",
                    boxShadow: "0px 2px 4px 0 #97979797",
                    padding: "2%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      color: "#97979797",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                      }}
                    >
                      Skills
                    </span>
                    <hr
                      style={{
                        width: "20%",
                      }}
                    />
                  </div>
                  <div className={styles.pcontainer}>
                    {user["user"]["userSkills"].map((x, i) => {
                      return (
                        <div className={styles.plang}>
                          {x["skills"]["skill"]}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : undefined}
              {user["user"]["role"] === "COMPANY" ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    margin: "2%  0%",
                  }}
                >
                  <InfoCompany
                    title={"history"}
                    description={user["user"]["companyDetails"]["history"]}
                    link={false}
                  />
                  <InfoCompany
                    title={"marketingValue"}
                    description={
                      user["user"]["companyDetails"]["marketingValue"]
                    }
                    link={false}
                  />
                  <InfoCompany
                    title={"websiteUrl"}
                    description={user["user"]["companyDetails"]["websiteUrl"]}
                    link={true}
                  />
                </div>
              ) : undefined}
              {user["user"]["role"] === "COMPANY" ? (
                <div
                  style={{
                    width: "100%",
                    boxShadow: "0px 2px 4px 0 #97979797",
                    padding: "2%  4%",
                    marginBottom: "2%",
                  }}
                >
                  <h5>Locations</h5>
                  <ul
                    style={{
                      listStyle: "circle",
                    }}
                  >
                    {user["user"]["companyLocation"].map((x, i) => {
                      return <li>{x["name"]}</li>;
                    })}
                  </ul>
                </div>
              ) : undefined}
            </div>

            <hr className={styles.hrr} />
            <div className={styles.right}>
              <BoxFill title={"Recent Jobs"} jobs={job} />
              <p></p>
              {user["user"]["role"] === "USER" ? (
                <BoxFill title={"Booked Jobs"} jobs={job2} />
              ) : undefined}
            </div>
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
  //===============================================================================================================================

  function getProfileData() {
    var token = localStorage.getItem("Access Token");

    fetch(PROFILE_DATA_URL + "/" + id, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((json) => onGetProfileData(json));
  }

  function onGetProfileData(json) {
    // window.alert(json.data.user.email);
    console.log("1");

    setUser(json.data);
    setLoading(false);
    getJobsData(json.data);
    if (
      json["data"]["user"]["role"] === "USER" &&
      localStorage.getItem("role") !== "COMPANY"
    )
      getJobsData2();
    else setLoading3(false);
    // console.log(json.data["user"]["userSkills"]);
    //  setJob(json.data.user.job)
  }
  function getJobsData(user) {
    var token = localStorage.getItem("Access Token");
    const url =
      user["user"]["role"] === "USER"
        ? "?type=FeaturedJobs&take=4"
        : `?comapny=${id}&type=FeaturedJobs&take=4`;
    if (localStorage.getItem("role") === "COMPANY") {
      fetch(PROFILE_DATA_URL + "/CompanyJobs", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((json) => ongetJobsData(json, user));
    } else {
      fetch(Job_DATA_URL + url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((json) => ongetJobsData(json, user));
    }
  }

  function ongetJobsData(json, user) {
    // window.alert(json.data.user.email);
    setLoading2(false);
    if (localStorage.getItem("role") === "COMPANY") {
      //  console.log(json.data["jobs"]);
      setJob(json.data["jobs"]);
    } else setJob(json.data["FeaturedJobs"]);
    if (user["user"]["role"] === "COMPANY") setLoading3(false);
    console.log("2");

    //  setJob(json.data.user.job)
  }
  function getJobsData2() {
    var token = localStorage.getItem("Access Token");

    fetch(Job_DATA_URL + "?type=Saved&take=1", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((json) => ongetJobsData2(json));
  }

  function ongetJobsData2(json) {
    // window.alert(json.data.user.email);
    console.log("3");

    setJob2(json.data["savedJobs"]);
    setLoading3(false);
    //  setJob(json.data.user.job)
  }
  function editProfile(e) {
    e.preventDefault();

    // console.log(e.target.name.value);
    // console.log(e.target.about.value);
    // console.log(e.target.cities.value);
    // console.log(e.target.jobs.value);
    // console.log(e.target.cv.value);
    // console.log(e.target.behance.value);
    // console.log(e.target.github.value);
    const person = {
      name: e.target.name.value,
      about: e.target.about.value,
      jobId: e.target.jobs.value,
      cityId: e.target.cities.value,
      cv: e.target.cv.value,
      behance: e.target.behance.value,
      github: e.target.github.value,
    };
    const user2 = user;
    user2["user"]["name"] = person.name;
    user2["user"]["aboutme"] = person.about;
    user2["user"]["job"]["id"] = person.jobId;
    user2["user"]["cityId"] = person.cityId;
    user2["user"]["cv"] = person.cv;
    user2["user"]["behance"] = person.behance;
    user2["user"]["github"] = person.github;
    setUser(user2);
    setIsPopupShown(false);

    let requestJson = JSON.stringify(person);

    var token = localStorage.getItem("Access Token");
    fetch(PROFILE_DATA_URL, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: requestJson,
    })
      .then((response) => response.json())
      .then((json) => ongetResponse(json));
  }

  function ongetResponse(json) {
    console.log(json);
  }
  function editProfile2(e) {
    e.preventDefault();
    console.log("///////////////////////////////////////////////////////////");

    // console.log(e.target.name.value);
    // console.log(e.target.about.value);
    // console.log(e.target.cities.value);
    // console.log(e.target.jobs.value);
    // console.log(e.target.cv.value);
    // console.log(e.target.behance.value);
    // console.log(e.target.github.value);
    const person = {
      name: e.target.name.value,
      about: e.target.about.value,
      jobId: e.target.jobs.value,
      Url: e.target.cv.value,
      history: e.target.behance.value,
      marketingValue: e.target.github.value,
    };
    console.log(person);
    const user2 = user;
    user2["user"]["name"] = person.name;
    user2["user"]["aboutme"] = person.about;
    user2["user"]["job"]["id"] = person.jobId;

    user2["user"]["companyDetails"]["websiteUrl"] = person.cv.value;
    user2["user"]["companyDetails"]["history"] = person.behance.value;
    user2["user"]["companyDetails"]["marketingValue"] = person.github.value;
    setUser(user2);
    setIsPopupShown(false);

    let requestJson = JSON.stringify(person);

    var token = localStorage.getItem("Access Token");
    fetch(PROFILE_DATA_URL + "/company", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: requestJson,
    })
      .then((response) => response.json())
      .then((json) => ongetResponse2(json));
  }

  function ongetResponse2(json) {
    console.log(json);
  }

  //===============================================================================================================================
};

export default User;
