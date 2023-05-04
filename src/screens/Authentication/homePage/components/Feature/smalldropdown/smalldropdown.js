import Dropdown from "react-bootstrap/Dropdown";
import styles from "./smalldrop.module.css";
import React, { useEffect, useState } from "react";
import { Title_DATA_URL } from "../../../../../../constants";
function ButtonDarkExample() {
  const [joblist, setjoblist] = useState([]);
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
          Job Title
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
                href="#/action-2"
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
          Job Type
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ background: "#F2EFEF " }}>
          <Dropdown.Item href="#/action-2" style={{ fontWeight: "bold" }}>
            Part_Time
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            Full_Time{" "}
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            Internship{" "}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );

  function getcard(e) {
    console.log(e);
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
