import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./cards/cardschome";
import Arrow from"./cards/arrows";
import "./sectionCards.css"
const SectionCards = () => {
    const navigate = useNavigate();
    function featuredClick() {
        navigate("/featured");
    }
    function recomendClick() {
        navigate("/recomend");
    }
    return (
        <>
        <div className="contientcard">
            <div className="top-section">
                <h2>Featured Jobs</h2>
                <a href="#featured" alt="" onClick={featuredClick} >View all</a>
            </div>
            <div className="car" >
                <Card />
                < Arrow />
            </div>
            <div className="top-section" >
                <h2 > Recommended for you</h2>
                <a href="# " alt="" onClick={recomendClick}>View all</a>
            </div>
            <div className="car" >
                <Card/>
                < Arrow />
            </div>
        </div>
        </>
);
};
export default SectionCards;
