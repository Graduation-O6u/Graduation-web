import Dropdown from "react-bootstrap/Dropdown";
import styles from "./smalldrop.module.css";
import React, { useEffect, useState } from "react";
import { Cite_DATA_URL } from "../../../../../../constants";
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
          Job Location
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ background: "#F2EFEF " }}>
          {joblist.map((x) => {
            console.log(x["name"]);
            return (
              <Dropdown.Item
                href="#/action-2"
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
          Salary
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ background: "#F2EFEF " }}>
          <Dropdown.Item href="#/action-2" style={{ fontWeight: "bold" }}>
            less then 3000{" "}
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            less then 6000{" "}
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            less then 9000{" "}
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
    await fetch(Cite_DATA_URL, {
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
