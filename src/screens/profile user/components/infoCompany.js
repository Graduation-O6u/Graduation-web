import React from "react";

export default function InfoCompany({ title, description, link }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: "1",
        padding: "5% 10%",
        boxShadow: "0px 2px 4px 0 #97979797",
      }}
    >
      <h5>{title}</h5>
      {link ? (
        <a
          href={description}
          style={{
            textDecoration: "underLine",
          }}
        >
          URL
        </a>
      ) : (
        <span>{description}</span>
      )}
    </div>
  );
}
