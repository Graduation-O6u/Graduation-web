import React from "react";
import Search from "./search";
import "./findjob.css";
const FindJob = () => {
    return (
        <>
        <div className=" contient-find">
            <div className="right">
                <h1 className="text-right">
                    Let’s Find Your<br></br> Dream Job
                </h1>
                < Search />
            </div>
            <div className="left">
                <img src="/images/left.png" alt=""></img>
            </div>
        </div>
        </>
);
};
export default FindJob;
