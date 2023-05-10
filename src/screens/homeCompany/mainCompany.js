import React from "react";
import NavbarHome from "../Authentication/homePage/components/Navbar-home";
import FindJob from "../Authentication/homePage/components/FindJob/FindJob";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileCard from "./component/cardComp";
import styles from "./company.module.css";
import Boxcomp from "./component/boxcomp";
const HomeCompany = () => {
  return (
    <div>
      <div className={styles.containerhome}>
        <NavbarHome titleHerf={"/homecompany"} />
        <FindJob title={"Staff"} />
        <Boxcomp />
        <ProfileCard />
      </div>
    </div>
  );
};
export default HomeCompany;
