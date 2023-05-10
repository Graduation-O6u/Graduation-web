import React from "react";
import Loader from "../../images/loader5.gif";
const LoadingPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
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

export default LoadingPage;
