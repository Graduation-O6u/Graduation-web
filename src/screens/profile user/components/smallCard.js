import React from "react";
import logo from "../../../images/o6u.png";
import calculateDateDistance from "../../../util/calcDistance";
import { useNavigate } from "react-router-dom";
export default function SmallCard({ data }) {
  const date = new Date();
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {" "}
      <div
        style={{
          gap: "10px",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          onClick={() => navigate("/user/" + data["company"]["id"])}
          src={data["company"]["image"]}
          alt="logo"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            onClick={() => navigate("/apply/" + data["company"]["id"])}
            id={data["id"]}
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#0074d9",
              cursor: "pointer",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.textDecoration = "underLine";
              console.log(e.target.style.textDecoration);
            }}
            onMouseLeave={(e) => {
              e.target.style.textDecoration = "none";
              console.log(e.target.style.textDecoration);
            }}
          >
            {data["jobTitle"]["title"]}
          </h1>
          <span
            style={{
              fontSize: "12px",
              color: "grey",
              fontWeight: "600",
            }}
          >
            {data["company"]["name"]}
          </span>
        </div>
      </div>
      <span
        style={{
          color: "#97979797",
        }}
      >
        {calculateDateDistance(date, data["createdAt"])}
      </span>
    </div>
  );
}
