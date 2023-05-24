import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./cards/cardsfeatured";
import "./sectionCards.css";
const SectionCards = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  function featuredClick() {
    navigate("/featured");
  }
  return (
    <>
      <div className="contientcard">
        <div className="top-section">
          <h2 style={{ marginBottom: "4%" }}>
            {searchQuery !== "" ? "Searched Jobs" : "Featured Jobs"}
          </h2>
          <a href="/jobs" alt="" onClick={featuredClick}>
            {searchQuery === "" ? "View all" : undefined}
          </a>
        </div>
        <div className="car">
          <Card searchQuery={searchQuery} />
        </div>
      </div>
    </>
  );
};
export default SectionCards;
