import Dropdown from "react-bootstrap/Dropdown";
import styles from "./smalldrop.module.css";
function ButtonDarkExample() {
  return (
    <div>
      <Dropdown style={{ paddingTop: "10%" }}>
        <Dropdown.Toggle variant="secondary" className={styles.tog}>
          The way of work
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ background: "#F2EFEF " }}>
          <Dropdown.Item href="#/action-2" style={{ fontWeight: "bold" }}>
            online
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            online{" "}
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            offline{" "}
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            offline
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown style={{ paddingTop: "10%" }}>
        <Dropdown.Toggle variant="secondary" className={styles.tog}>
          Campony
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ background: "#F2EFEF " }}>
          <Dropdown.Item href="#/action-2" style={{ fontWeight: "bold" }}>
            microsoft
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            google{" "}
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            LMU{" "}
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            {" "}
            FORL
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default ButtonDarkExample;
