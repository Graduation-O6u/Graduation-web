import React from "react";
import "../welcome.css";
const Search = () => {
  return (
    <div className="searchBox" >
      <input
        type="text"
        placeholder="Job Title or keyword | Location"
        className="textInp"
      ></input>
      <button type="submit" className= "submit" >
        <i class="fa fa-search"></i>
      </button>
    </div>
  );
};
export default Search;
