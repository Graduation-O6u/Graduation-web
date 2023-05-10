import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./cards/cardsRecommended";
import "./sectionCards.css";
const SectionCards = ({ changeLoading }) => {
  const navigate = useNavigate();
  function featuredClick() {
    navigate("/recomend");
  }
  return (
    <>
      <div className="contientcard">
        <div className="top-section">
          <h2 style={{ marginBottom: "4%" }}>Recommended for you</h2>
          <a href="#featured" alt="" onClick={featuredClick}>
            View all
          </a>
        </div>
        <div className="car">
          <Card changeLoading={changeLoading} />
        </div>
      </div>
    </>
  );
};
export default SectionCards;
