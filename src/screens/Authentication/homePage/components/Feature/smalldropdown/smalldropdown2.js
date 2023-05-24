import Dropdown from "react-bootstrap/Dropdown";
import styles from "./smalldrop.module.css";
import React, { useEffect, useState } from "react";
import { Cite_DATA_URL, PROFILE_DATA_URL } from "../../../../../../constants";
import { cites } from "../../../../../../static";
function ButtonDarkExample({ filter, setFilter }) {
  const [selected, setSelected] = useState("Job Location");

  const [selected2, setSelected2] = useState("Salary");
  return (
    <div>
      <Dropdown style={{ paddingTop: "10%" }}>
        <Dropdown.Toggle
          id="dropdown-button-dark-example1"
          variant="secondary"
          className={styles.tog}
        >
          {selected}
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{
            background: "#F2EFEF ",
            overflowY: "scroll",
            height: "320px",
            overflowX: "hidden",
          }}
        >
          {cites.map((x) => {
            //.log(x["name"]);
            return (
              <Dropdown.Item
                onClick={(e) => {
                  if (selected === "Job Location") {
                    setFilter(filter + `&jobLocation=${x["code"]}`);
                  } else if (!filter.includes(x["code"])) {
                    const sub = filter
                      .split("&jobLocation")
                      .pop()
                      .split("&")[0];
                    let original = filter;
                    console.log(original);
                    console.log(sub);
                    const nor = original.replace(sub, "=" + x["code"]);
                    console.log(nor);
                    setFilter(nor);
                  }
                  setSelected(x["name"]);
                }}
                style={{
                  fontWeight: "bold",
                }}
              >
                {x["name"]}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown style={{ paddingTop: "10%" }}>
        <Dropdown.Toggle variant="secondary" className={styles.tog}>
          {selected2}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ background: "#F2EFEF " }}>
          <Dropdown.Item
            onClick={(e) => {
              if (selected2 === "Salary") {
                setFilter(filter + `&salary=less then 3000`);
              } else if (!filter.includes("less then 3000")) {
                const sub = filter.split("&Salary").pop().split("&")[0];
                let original = filter;
                console.log(original);
                console.log(sub);
                const nor = original.replace(sub, "=less then 3000");
                console.log(nor);
                setFilter(nor);
              }
              selected2("less then 3000");
            }}
            style={{ fontWeight: "bold" }}
          >
            less then 3000{" "}
          </Dropdown.Item>
          <Dropdown.Item
            style={{ fontWeight: "bold" }}
            onClick={(e) => {
              if (selected2 === "Salary") {
                setFilter(filter + `&salary=less then 6000`);
              } else if (!filter.includes("less then 6000")) {
                const sub = filter.split("&Salary").pop().split("&")[0];
                let original = filter;
                console.log(original);
                console.log(sub);
                const nor = original.replace(sub, "=less then 6000");
                console.log(nor);
                setFilter(nor);
              }
              selected2("less then 6000");
            }}
          >
            less then 6000{" "}
          </Dropdown.Item>
          <Dropdown.Item
            style={{ fontWeight: "bold" }}
            onClick={(e) => {
              if (selected2 === "Salary") {
                setFilter(filter + `&salary=less then 9000`);
              } else if (!filter.includes("less then 9000")) {
                const sub = filter.split("&Salary").pop().split("&")[0];
                let original = filter;
                console.log(original);
                console.log(sub);
                const nor = original.replace(sub, "=less then 9000");
                console.log(nor);
                setFilter(nor);
              }
              setSelected2("less then 9000");
            }}
          >
            less then 9000{" "}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
export default ButtonDarkExample;
