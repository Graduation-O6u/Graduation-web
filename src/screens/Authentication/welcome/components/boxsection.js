import React from "react";
import "../welcome.css";
import Search from "./search";
const Text = () => {
  return (
    <>
      <div className="leftsection">
        <div className="textBox">
          <h1 className="title">
            Helping you Land a <span style={{ color: "#0074d9" }}>Job</span>{" "}
            andLive yourDreams.
          </h1>
          <p className="desc">
            Find jobs , create trackable resumes and enrich your application
          </p>
        </div>
        {/* <Search /> */}
      </div>
    </>
  );
};
export default Text;
