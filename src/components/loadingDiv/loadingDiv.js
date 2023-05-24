import React from "react";
import Loader from "../../images/loader5.gif";
const LoadingDiv = () => {
  return (
    <div
      style={{
        width: "100vw",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Loader} alt="loading" />
    </div>
  );
};

export default LoadingDiv;
