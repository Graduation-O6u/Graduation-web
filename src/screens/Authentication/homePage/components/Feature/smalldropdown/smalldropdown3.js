import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./smalldrop.module.css";
import { PROFILE_DATA_URL } from "../../../../../../constants";
import { useEffect } from "react";
function ButtonDarkExample({ filter, setFilter }) {
  const [joblist, setjoblist] = React.useState([]);
  const [selected, setSelected] = React.useState("The way of work");

  const [selected2, setSelected2] = React.useState("Campany");
  useEffect(() => {
    Card();
  }, []);
  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("Access Token")}`,
  });
  return (
    <div>
      <Dropdown style={{ paddingTop: "10%" }}>
        <Dropdown.Toggle variant="secondary" className={styles.tog}>
          {selected}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ background: "#F2EFEF " }}>
          <Dropdown.Item
            style={{ fontWeight: "bold" }}
            onClick={(e) => {
              if (selected === "The way of work") {
                setFilter(filter + "&wayOfWork=On_Site");
              } else if (!filter.includes("On_Site")) {
                const sub = filter.split("&wayOfWork").pop().split("&")[0];

                let original = filter;
                console.log(original);
                console.log(sub);
                const nor = original.replace(sub, "=On_Site");
                console.log(nor);
                setFilter(nor);
              }
              setSelected("On_Site");
            }}
          >
            On_Site
          </Dropdown.Item>
          <Dropdown.Item
            style={{ fontWeight: "bold" }}
            onClick={(e) => {
              if (selected === "The way of work") {
                setFilter(filter + "&wayOfWork=Hybird");
              } else if (!filter.includes("Hybird")) {
                const sub = filter.split("&wayOfWork").pop().split("&")[0];

                let original = filter;
                console.log(original);
                console.log(sub);
                const nor = original.replace(sub, "=Hybird");
                console.log(nor);
                setFilter(nor);
              }
              setSelected("Hybird");
            }}
          >
            Hybird{" "}
          </Dropdown.Item>
          <Dropdown.Item
            style={{ fontWeight: "bold" }}
            onClick={(e) => {
              if (selected === "The way of work") {
                setFilter(filter + "&wayOfWork=Remote");
              } else if (!filter.includes("Remote")) {
                const sub = filter.split("&wayOfWork").pop().split("&")[0];

                let original = filter;
                console.log(original);
                console.log(sub);
                const nor = original.replace(sub, "=Remote");
                console.log(nor);
                setFilter(nor);
              }
              setSelected("Remote");
            }}
          >
            Remote{" "}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown style={{ paddingTop: "10%" }}>
        <Dropdown.Toggle variant="secondary" className={styles.tog}>
          {selected2}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ background: "#F2EFEF " }}>
          {joblist.map((x) => {
            return (
              <Dropdown.Item
                onClick={(e) => {
                  if (selected2 === "Company") {
                    setFilter(filter + `&comapny=${x["id"]}`);
                  } else if (!filter.includes(x["id"])) {
                    const sub = filter.split("&comapny").pop().split("&")[0];
                    let original = filter;
                    console.log(original);
                    console.log(sub);
                    const nor = original.replace(sub, "=" + x["id"]);
                    console.log(nor);
                    setFilter(nor);
                  }
                  setSelected2(x["name"]);
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
    </div>
  );
  function getcard(e) {
    // console.log(e);
    setjoblist(e["data"]);
  }
  async function Card() {
    await fetch(PROFILE_DATA_URL + "/all?type=COMPANY&take=100", {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((json) => getcard(json));
  }
}

export default ButtonDarkExample;
