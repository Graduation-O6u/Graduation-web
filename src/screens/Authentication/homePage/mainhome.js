import React from "react";
import NavbarHome from "./components/Navbar-home";
import FindJob from "./components/FindJob/FindJob";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionCards from "./components/cardsHome/sectionCards";
import SectionRecomind from "./components/cardsHome/sectionrecom";
import styles from "./homePage.module.css";
import HomeCompany from "../../homeCompany/mainCompany";
const HomePage = () => {
  const role = localStorage.getItem("role");
  return (
    <div>
      {role === "USER" ? (
        <div className={styles.containerhome}>
          <NavbarHome titleHerf={"/"} />
          <FindJob title={"Job"} />
          <div className={styles.sectio_cards}>
            <div style={{ hight: "40%" }}>
              <SectionCards />
              <SectionRecomind />
            </div>
          </div>
        </div>
      ) : (
        <HomeCompany />
      )}
    </div>
  );
};
export default HomePage;
