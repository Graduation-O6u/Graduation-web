import React from "react";
import NavbarHome from "./components/Navbar-home";
import FindJob from "./components/FindJob/FindJob";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionCards from "./components/cardsHome/sectionCards";
import SectionRecomind from "./components/cardsHome/sectionrecom";
import styles from "./homePage.module.css";
import { useNavigate } from "react-router-dom";
import HomeCompany from "../../homeCompany/mainCompany";
const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState("");

  const role = localStorage.getItem("role");
  if (!role) {
    navigate("/login");
  }
  return (
    <div>
      {role && role === "USER" ? (
        <div className={styles.containerhome}>
          <NavbarHome titleHerf={"/"} type={"Home"} />
          <FindJob
            title={"Job"}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className={styles.sectio_cards}>
            <div style={{ hight: "40%" }}>
              <SectionCards
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
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
