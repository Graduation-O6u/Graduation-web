import React from "react";
import SmallCard from "./smallCard";
export default function BoxFill({ title, jobs }) {
  if (jobs) {
    console.log(jobs);
    console.log(jobs.length);
  }
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
          {jobs && jobs.length > 0 ? (
            <div>
              {jobs.length > 0 && jobs[0] ? (
                <SmallCard data={jobs[0]} />
              ) : undefined}
              {jobs.length > 1 && jobs[1] ? <hr /> : undefined}
              {jobs.length > 1 && jobs[1] ? (
                <SmallCard data={jobs[1]} />
              ) : undefined}
              {jobs.length > 2 && jobs[2] ? <hr /> : undefined}
              {jobs.length > 2 && jobs[2] ? (
                <SmallCard data={jobs[2]} />
              ) : undefined}
              {jobs.length > 3 && jobs[3] ? <hr /> : undefined}
              {jobs.length > 3 && jobs[3] ? (
                <SmallCard data={jobs[3]} />
              ) : undefined}
            </div>
          ) : (
            <p>There isnot any jobs for you</p>
          )}
        </div>
      ) : (
        <div>
          {jobs && jobs.length > 0 ? (
            <SmallCard data={jobs[0]} />
          ) : (
            <p>There isnot any jobs for you</p>
          )}
        </div>
      )}
    </div>
  );
}
