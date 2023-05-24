import Dropdown from "react-bootstrap/Dropdown";
import styles from "./smalldrop.module.css";
import React, { useEffect, useState } from "react";
import { Title_DATA_URL } from "../../../../../../constants";
function ButtonDarkExample({ filter, setFilter }) {
  const [joblist, setjoblist] = useState([]);
  const [selected, setSelected] = useState("Job Title");

  const [selected2, setSelected2] = useState("Job Type");
  useEffect(() => {
    Card();
  }, []);
  return (
    <div>
      <Dropdown style={{ paddingTop: "10%" }}>
        <Dropdown.Toggle
          id="dropdown-button-dark-example1"
          variant="secondary"
          className={styles.tog}
        >
          {" "}
          {selected}
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{
            background: "#F2EFEF ",
            width: "fit-content",
            height: "320px",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          {joblist.map((x) => {
            return (
              <Dropdown.Item
                onClick={(e) => {
                  console.log(filter, x["id"]);
                  if (selected === "Job Title") {
                    setFilter(filter + `&jobTitle=${x["id"]}`);
                  } else if (!filter.includes(x["id"])) {
                    const sub = filter.split("&jobTitle").pop().split("&")[0];
                    let original = filter;
                    console.log(original);
                    console.log(sub);
                    const nor = original.replace(sub, "=" + x["id"]);
                    console.log(nor);
                    setFilter(nor);
                  }
                  setSelected(x["title"]);
                }}
                style={{
                  fontWeight: "bold",
                }}
              >
                {x["title"]}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown style={{ paddingTop: "10%" }}>
        <Dropdown.Toggle variant="secondary" className={styles.tog}>
          {" "}
          {selected2}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ background: "#F2EFEF " }}>
          <Dropdown.Item
            style={{ fontWeight: "bold" }}
            onClick={(e) => {
              if (selected2 === "Job Type") {
                setFilter(filter + `&jobType=Part_Time`);
              } else if (!filter.includes("Part_Time")) {
                const sub = filter.split("&jobType").pop().split("&")[0];

                let original = filter;
                console.log(original);
                console.log(sub);
                const nor = original.replace(sub, "=Part_Time");
                console.log(nor);
                setFilter(nor);
              }
              setSelected2("Part_Time");
            }}
          >
            Part_Time
          </Dropdown.Item>
          <Dropdown.Item
            style={{ fontWeight: "bold" }}
            onClick={(e) => {
              if (selected2 === "Job Type") {
                setFilter(filter + `&jobType=Full_Time`);
              } else if (!filter.includes("Full_Time")) {
                const sub = filter.split("&jobType").pop().split("&")[0];

                let original = filter;
                console.log(original);
                console.log(sub);
                const nor = original.replace(sub, "=Full_Time");
                console.log(nor);
                setFilter(nor);
              }

              setSelected2("Full_Time");
            }}
          >
            Full_Time{" "}
          </Dropdown.Item>
          <Dropdown.Item
            style={{ fontWeight: "bold" }}
            onClick={(e) => {
              if (selected2 === "Job Type") {
                setFilter(filter + `&jobType=Internship`);
              } else if (!filter.includes("Internship")) {
                const sub = filter.split("&jobType").pop().split("&")[0];

                let original = filter;
                console.log(original);
                console.log(sub);
                const nor = original.replace(sub, "=Internship");
                console.log(nor);
                setFilter(nor);
              }
              setSelected2("Internship");
            }}
          >
            Internship{" "}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );

  function getcard(e) {
    // console.log(e);
    setjoblist(e["data"]);
  }
  async function Card() {
    await fetch(Title_DATA_URL, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => getcard(json));
  }
}
export default ButtonDarkExample;
