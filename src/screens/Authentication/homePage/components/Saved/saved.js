import React from "react";
// import "./homePage.module.css";
import NavbarHome from "../Navbar-home" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from  "../cardsHome/cards/Cards";
import Drop from "./drop"
const Featured = () => {
    return (
        <>
        <div className="container-home">
            < NavbarHome />
            < Drop />
            <div className="cardds">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        </>
);
};
export default Featured;
