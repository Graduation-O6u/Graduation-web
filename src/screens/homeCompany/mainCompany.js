import React from "react";
import NavbarHome from "../Authentication/homePage/components/Navbar-home";
import FindJob from "../Authentication/homePage/components/FindJob/FindJob";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileCard from "./component/cardComp";
import styles from "./company.module.css";
import Boxcomp from "./component/boxcomp";
import { useNavigate } from "react-router-dom";

import LoadingPage from "../../components/loadingPage/loadingPage";
import { PROFILE_DATA_URL } from "../../constants";
const HomeCompany = () => {
  const navigate = useNavigate();

  const [joblist, setjoblist] = React.useState([]);

  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("Access Token")}`,
  });
  const [loading, setloading] = React.useState(false);
  React.useEffect(() => {
    Card();
  }, []);
  return (
    <div>
      {!loading ? (
        <div className={styles.containerhome}>
          <NavbarHome titleHerf={"/homecompany"} />
          <FindJob title={"Staff"} />
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
    } else {
      setjoblist(e["data"]);
    }
    setloading(false);
  }
  async function Card() {
    console.log("hiiiiiiiiiiiiiiiii");
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
