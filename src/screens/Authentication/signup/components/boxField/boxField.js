import React, { useEffect, useState } from "react";
import styles from "./boxField.module.css";
import Input from "../../../components/input/input";
import Drop from "../../../components/drop/drop";
import Or from "../../../components/or/or";
import Media from "../../../components/media/media";
import LoadingButton from "../../../../../components/loadingButton/loadingButton";
import { Cons } from "../../../../../constants";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const BoxField = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [show, changeShow] = useState(false);

  const [isFilePicked, setIsFilePicked] = useState(false);

  const [loading, chageLoading] = useState(false);

  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files);
    setIsFilePicked(true);

    console.log("file", event.target.files[0]);
    console.log("file", event.target.files[0].type.split("/"));
    console.log("file", event.target.files[0].type.split("/")[1]);

    if (event.target.files[0].type.split("/")[1] != "pdf") {
      console.log("file type not allowed");
    } else if (event.target.files[0].size > 1000000) {
      console.log("file type not j");
    } else {
      console.log("sucess");
      uplaodFile(event.target.files[0]);
    }
  };
  const handleClose = () => {
    changeShow(false);
  };
  const handleLog = (e) => {
    e.preventDefault();
    changeShow(true);
  };
  useEffect(() => {
    loadJobs();
    loadCities();
  }, []);

  return (
    <div className={styles.middle2}>
      <form className={styles.form}>
        <div className={styles.nameAndEmail}>
          <Input label={"Name"} small={true} />
          <Input label={"Email"} small={true} />
        </div>
        <Input label={"Password"} small={false} />
        <Input label={"Confirm Password"} small={false} />
        <div className={styles.nameAndEmail}>
          <Drop/>
          
        </div>
        <input
          type="file"
          ref={hiddenFileInput}
          style={{ display: "none" }}
          onChange={changeHandler}
        />
        {loading ? (
          <LoadingButton />
        ) : (
          <button className={styles.OutButton} onClick={handleClick}>
            Uplaod Your cv
          </button>
        )}

        <button className={styles.Button} onClick={handleLog}>
          Sign up
        </button>
        <h6 className={styles.terms}>
          By clicking Sign Up , you agree to our{" "}
          <span id={styles.terms}> Terms</span> ,
          <span id={styles.terms}> Privacy Policy</span> and
          <span id={styles.terms}> Cookies Policy</span>{" "}
        </h6>
        <Or />
        <Media />
        <h5 id={styles.login}>
          Already have an account ?{" "}
          <a href="#login" title="Login">
            Login
          </a>
        </h5>
      </form>
    </div>
  );

  // ---------------------------------------------------------------------------------------------------//

  function uplaodFile() {
    const formData = new FormData();

    formData.append("file", selectedFile);
    chageLoading(true);
    fetch(Cons.baseUrl + "/upload/file", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        chageLoading(false);
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function loadJobs() {
    const JOBS_URL =
      "https://graduation-backend-production.up.railway.app/auth/jobs";
    fetch(JOBS_URL)
      .then((response) => response.json())
      .then((json) => onGetJobsData(json));
  }

  function onGetJobsData(json) {
    //   setJobs(json.data);
  }

  function loadCities() {
    const CITIES_URL =
      "https://graduation-backend-production.up.railway.app/auth/cities";
    fetch(CITIES_URL)
      .then((response) => response.json())
      .then((json) => onGetCitiesData(json));
  }

  function onGetCitiesData(json) {
    // setCities(json.data);
  }
};
export default BoxField;
