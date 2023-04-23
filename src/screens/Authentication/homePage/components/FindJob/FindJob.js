import React from "react";
import Search from "./search";
import "./findjob.css";
const FindJob = ({title} ) => {
    return (
        <>
        <div className=" contient-find">
            <div className="right">
                <div className="right-container">
                    <h1 class="animate-charcter" >
                    Let’s Find Your Dream {title} 
                    </h1>
                    < Search />
                </div>
            </div>
        </div>
        </>
);
};
export default FindJob;
