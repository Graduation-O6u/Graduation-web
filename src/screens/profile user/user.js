import React, { useState, useEffect } from "react";
import LoadingButton from "../../components/loadingButton/loadingButton";

import BoxFill from "./components/box";
import NavbarHome from "../Authentication/homePage/components/Navbar-home";
import styles from "../profile user/user.module.css";
import "react-day-picker/dist/style.css";

import {
  Job_DATA_URL,
  PROFILE_DATA_URL,
  Send_Meeting_DATA_URL,
  SERVER_LINK,
} from "../../constants";
import Input from "../Authentication/components/input/input";
import Drop from "../company/comapnySignup/components/drop edit/drop";
import DropLoc from "../company/comapnySignup/components/drop signup location/droploc";
import { CardProfile } from "./components/cardProfile";
import LoadingPage from "../../components/loadingPage/loadingPage";
import InfoCompany from "./components/infoCompany";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { DayPicker } from "react-day-picker";
import { DatePicker } from "rsuite";
const User = () => {
  const id =
    window.location.href.split("/").pop() === "user"
      ? localStorage.getItem("id")
      : window.location.href.split("/").pop();
  const [user, setUser] = useState(null);
  const [job, setJob] = useState(null);
  const [job3, setJob3] = useState(null);

  const [job2, setJob2] = useState(null);

  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [loading4, setLoading4] = useState(false);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const notify = async (error) => toast.error(error);
  const notify2 = async (error) => toast.success(error);

  useEffect(() => {
    getProfileData();
  }, []);
  const [file, setFile] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [fileName, setFileName] = useState("Upload Your CV");
  const [isPopupShown, setIsPopupShown] = useState(false);
  const [isPopupShown2, setIsPopupShown2] = useState(false);
  const [selected, setSelected] = useState();

  const showHidePopup = () => {
    setIsPopupShown(!isPopupShown);
  };
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);

    if (event.target.files[0].type.split("/")[1] != "pdf") {
      notify("file type not allowed");
    } else if (event.target.files[0].size > 1000000) {
      notify("file size too big");
    } else {
      setFileName(event.target.files[0].name);
      uploadFile(event.target.files[0]);
    }
  };
  async function uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);

    setLoading4(true);
    const result = await axios.post(`${SERVER_LINK}/upload/file`, formData, {
      crossDomain: true,
    });
    setLoading4(false);
    setFile(result["data"]["url"]);
  }
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
            <form className={styles.edit} onSubmit={editProfile}>
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
                <Drop jobId={user["user"]["jobId"]} setJob={setJob3} />
              </div>

              <input
                type="file"
                ref={hiddenFileInput}
                style={{ display: "none" }}
                onChange={changeHandler}
              />
              {localStorage.getItem("role") === "USER" && loading4 ? (
                <LoadingButton />
              ) : (
                <button
                  type="button"
                  className={styles.OutButton}
                  onClick={handleClick}
                >
                  {fileName}
                </button>
              )}

              <div className={styles.small}>
                <Input
                  label={"Your Behance URL"}
                  small={true}
                  name={"behance"}
                  type={"text"}
                  defaultValue={user["user"]["behance"]}
                />
                <Input
                  label={"Your GitHub URL"}
                  small={true}
                  name={"github"}
                  type={"text"}
                  defaultValue={user["user"]["github"]}
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
  function popup2() {
    return (
      <>
        <div id={styles.loginModal}>
          <div className={styles.modal}>
            <div className={styles.header}>
              <h5>Create Meeting</h5>
              <div
                onClick={() => {
                  setIsPopupShown2(!isPopupShown2);
                  sendMeeting();
                }}
                className={styles.close}
              >
                x
              </div>
            </div>
            <form className={styles.edit} onSubmit={sendMeeting}>
              <input
                name="date"
                type="datetime-local"
                format="MM/dd/yyyy HH:mm"
                style={{
                  width: "100%",
                  padding: "1%",
                  marginBottom: "20px",
                }}
              />

              <button type="submit" className={styles.save}>
                Create
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <NavbarHome titleHerf={"-"} type={""} />
      <ToastContainer />

      {!loading && !loading2 && !loading3 ? (
        <div className={styles.container}>
          {isPopupShown && popup()}
          {isPopupShown2 && popup2()}

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
                setIsPopupShown2={setIsPopupShown2}
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
                <BoxFill title={"Saved Jobs"} jobs={job2} />
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
    const user2 = user;

    const person = {
      name: e.target.name.value,
      about: e.target.about.value,
      jobId: job3,
      cv: file === "" ? user2["user"]["cv"] : file,
      behance: e.target.behance.value,
      github: e.target.github.value,
    };
    console.log(person);
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
  function sendMeeting(e) {
    e.preventDefault();

    const person = {
      userId: user["user"]["id"],
      companyId: localStorage.getItem("id"),
      description: `${localStorage.getItem("name")} want to meet you in ${
        e.target.date.value
      } we will send you mail with meeting link`,
      date: e.target.date.value,
    };
    if (!person.date) {
      return notify("Please Choose Valid Date");
    }
    if (new Date(person.date) < new Date()) {
      return notify("Please choose valid date");
    }
    setIsPopupShown2(false);

    let requestJson = JSON.stringify(person);

    var token = localStorage.getItem("Access Token");
    fetch(Send_Meeting_DATA_URL, {
      method: "POST",
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
    notify2("Create Meeting Successfully");
  }

  //===============================================================================================================================
};

export default User;
