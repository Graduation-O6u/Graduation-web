import React from "react";
import "../Home.css"
const Search = () => {
    return (
        <div className="search-box">
            <input type="text" placeholder="Job Title or keyword | Location" className="text-inp"></input>
            <button type="submit" className="submit"><i class="fa fa-search"></i></button>
        </div>
    )
}
export default Search;