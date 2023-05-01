import Dropdown from "react-bootstrap/Dropdown";
import styles from "./smalldrop.module.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Title_DATA_URL } from "../../../../../../constants";
function ButtonDarkExample() {
  const navigate = useNavigate();
  const [joblist, setjoblist] = useState([]);
  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("Access Token")}`,
  });
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
        <Dropdown.Menu style={{ background: "#F2EFEF " }}>
          {joblist.map((x) => {
            console.log(x);
            return (
              <Dropdown.Item href="#/action-2" style={{ fontWeight: "bold" }}>
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
            IT
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            IT{" "}
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            business{" "}
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            {" "}
            Manager
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
