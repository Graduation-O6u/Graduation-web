import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./cards/cardsfeatured";
import "./sectionCards.css"
const SectionCards = ( {title} ) => {
    const navigate = useNavigate();
    function featuredClick() {
        navigate("/featured");
    }
    return (
        <>
        <div className="contientcard">
            <div className="top-section">
                <h2 style={{ marginBottom: "4%", }}>Featured Jobs</h2>
                <a href="#featured" alt="" onClick={featuredClick} >View all</a>
            </div>
            <div className="car" >
                <Card />
            </div>
        </div>
        </>
);
};
export default SectionCards;