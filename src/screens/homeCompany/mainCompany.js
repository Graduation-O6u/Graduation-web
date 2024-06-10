import React from "react";
import NavbarHome from "../Authentication/homePage/components/Navbar-home";
import FindJob from "../Authentication/homePage/components/FindJob/FindJob";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileCard from "./component/cardComp";
import styles from "./company.module.css";
import Boxcomp from "./component/boxcomp";
import { useNavigate } from "react-router-dom";

import LoadingPage from "../../components/loadingPage/loadingPage";
import { PROFILE_DATA_URL, SEARCH_USER } from "../../constants";
import { ToastContainer } from "react-toastify";
const HomeCompany = () => {
  const navigate = useNavigate();

  const [joblist, setjoblist] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState(null);
  const [last, setLast] = React.useState("");
  const [last2, setLast2] = React.useState([]);

  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("Access Token")}`,
  });
  const [loading, setloading] = React.useState(false);
  React.useEffect(() => {
    Card();
  }, []);
  async function searchCompany() {
    const person = {
      searchData: searchQuery,
    };
    let requestJson = JSON.stringify(person);

    await fetch(SEARCH_USER, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("Access Token"),
      },
      body: requestJson,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setjoblist(json["data"]);
      });
  }
  if (searchQuery !== null && searchQuery !== last) {
    searchCompany();
    setLast(searchQuery);
  }
  if (searchQuery === "" && joblist !== last2 && last2.length > 0) {
    setjoblist(last2);
  }
  return (
    <div>
      <ToastContainer />
      {!loading ? (
        <div className={styles.containerhome}>
          <NavbarHome titleHerf={"/"} type={"Home"} />
          <FindJob
            title={"job"}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className={styles.sectio_cards}>
            <div style={{ hight: "40%" }}>
              {/* <ProfileCard setloading={setloading} joblist={joblist} /> */}
            </div>
          </div>
          <Boxcomp />
          <ProfileCard setloading={setloading} joblist={joblist} />
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
  function getcard(e) {
    console.log(e);
    if (e["message"] === "Unauthorized") {
      navigate("/login");
    }
    if (joblist.length !== 0) {
      setjoblist((listt) => [...listt, ...e["data"]]);
      setLast2((listt) => [...listt, ...e["data"]]);
    } else {
      setjoblist(e["data"]);
      setLast2(e["data"]);
    }
    setloading(false);
  }
  async function Card() {
    let takee = 20;

    await fetch(`${PROFILE_DATA_URL}/all?type=USER&take=${takee}`, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((json) => getcard(json));
  }
};
export default HomeCompany;
