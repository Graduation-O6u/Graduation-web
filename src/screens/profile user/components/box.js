import React from "react";
import SmallCard from "./smallCard";
export default function BoxFill({ title, jobs }) {
  return (
    <div
      style={{
        padding: "3%",
        boxShadow: "0 1px 3px #97979797",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <p
          style={{
            color: "#97979797",
            fontWeight: "700",
          }}
        >
          {title}
        </p>
        <hr
          style={{
            color: "#97979797",
            width: "30%",
          }}
        />
      </div>
      {title === "Recent Jobs" ? (
        <div>
          <SmallCard data={jobs[0]} />
          <hr />
          <SmallCard data={jobs[1]} />
          <hr />

          <SmallCard data={jobs[2]} />
          <hr />

          <SmallCard data={jobs[3]} />
        </div>
      ) : (
        <SmallCard data={jobs[0]["jobs"]} />
      )}
    </div>
  );
}
