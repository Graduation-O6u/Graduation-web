import React from "react";
import Search from "./search";
import "./findjob.css";
const FindJob = ({ title, searchQuery, setSearchQuery }) => {
  return (
    <>
      <div className=" contient-find">
        <div className="right">
          <div className="right-container">
            <h1 class="animate-charcter">Let’s Find Your Dream {title}</h1>
            {localStorage.getItem("role") === "USER" ? (
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            ) : undefined}
          </div>
        </div>
      </div>
    </>
  );
};
export default FindJob;
