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
            On_Site
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            Hybird{" "}
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            Remote{" "}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown style={{ paddingTop: "10%" }}>
        <Dropdown.Toggle variant="secondary" className={styles.tog}>
          Campony
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ background: "#F2EFEF " }}>
          <Dropdown.Item href="#/action-2" style={{ fontWeight: "bold" }}>
            Microsoft
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight: "bold" }}>
            Meta{" "}
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
