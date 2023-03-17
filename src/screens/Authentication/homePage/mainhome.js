import React from "react";
import "./homePage.module.css";
import NavbarHome from "./components/Navbar-home" ;
import FindJob from "./components/FindJob/FindJob" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionCards from "./components/cardsHome/sectionCards" ;
const HomePage = () => {
    return (
        <>
        <div className="container-home">
            < NavbarHome />
            <div style={{ flex:"1" ,}}>
            < FindJob />
            </div>
            < SectionCards />
        </div>
        </>
);
};
export default HomePage;
