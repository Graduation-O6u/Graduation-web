import React from "react";
import Logo from "../../components/logo/logo";

function Learn() {
  return (
    <div>
      <Logo />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          margin: "0% 5%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#0074D9",
            fontSize: "60px",
            fontWeight: "800",
            marginBottom: "2%",
          }}
        >
          About Job Seeker
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#888888",
            fontSize: "25px",
            fontWeight: "500",
            marginBottom: "5%",
          }}
        >
          Welcome to Job Seeker, professional job provider which recommended the
          best search for you like Jobs or Job Applicants for Company.
        </p>
        <h1
          style={{
            textAlign: "center",
            color: "#0074D9",
            fontSize: "60px",
            fontWeight: "800",
            marginBottom: "2%",
          }}
        >
          Mission
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#888888",
            fontSize: "25px",
            fontWeight: "500",
          }}
        >
          Recommendation Jobs or Job Applicants
        </p>
      </div>
    </div>
  );
}
export default Learn;
