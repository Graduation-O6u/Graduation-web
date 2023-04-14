import React from "react";
// import "./homePage.module.css";
import NavbarHome from "./components/Navbar-home" ;
import FindJob from "./components/FindJob/FindJob" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionCards from "./components/cardsHome/sectionCards" ;
import styles from "./homePage.module.css" ;
const HomePage = () => {
    return (
        <>
        <div className={ styles.containerhome}>
            < NavbarHome />
            < FindJob />
            <div className="sectio-cards" style={{ margin:" 1% 5%" }} >
                <div style={{hight:"40%"}}>
                    < SectionCards title="Feature jobs"/>
                    < SectionCards title="Recommended jobs"/>
                </div>
            </div>
        </div>
        </>
);
};
export default HomePage;
