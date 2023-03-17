import React from "react";
// import "./homePage.module.css";
import NavbarHome from "../Navbar-home" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from  "./Cardsall/cardschome";
import Drop from "./drop"
const Featured = () => {
    return (
        <>
        <div className="container-home">
            < NavbarHome />
            < Drop />
            <Cards/>
            < Cards />
            <Cards/>
            < Cards />
            {/* < Tabs /> */}
        </div>
        </>
);
};
export default Featured;
