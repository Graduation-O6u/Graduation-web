import React from "react";
import "../welcome.css";
import Search from "./search";
const Text = () => {
  return (
    <>
      <div className="leftsection">
        <div className="textBox">
          <h1 className="title">
            Helping you <br></br>
            <span>Land a Job</span> and <br></br>Live your <br></br>Dreams.
          </h1>
          <p className="desc">
            Find jobs , create trackable <br></br>resumes and enrich your
            <br></br> application
          </p>
        </div>
        {/* <Search /> */}
      </div>
    </>
  );
};
export default Text;
