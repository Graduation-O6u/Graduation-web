import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./cards/cardschome";
import Arrow from"./cards/arrows";
import "./sectionCards.css"
const SectionCards = ( {title} ) => {
    const navigate = useNavigate();
    function featuredClick() {
        navigate("/featured");
    }
    // function recomendClick() {
    //     navigate("/recomend");
    // }
    return (
        <>
        <div className="contientcard">
            <div className="top-section">
                <h2 style={{ marginBottom: "5%", }}>{title}</h2>
                <a href="#featured" alt="" onClick={featuredClick} >View all</a>
            </div>
            <div className="car" >
                <Card />
                < Arrow />
            </div>
        </div>
        </>
);
};
export default SectionCards;