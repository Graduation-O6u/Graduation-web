import Dropdown from 'react-bootstrap/Dropdown';
import styles from "./smalldrop.module.css" ;
function ButtonDarkExample() {
  return (
    <>
      <Dropdown style={{paddingTop: "10%" ,}}>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className={ styles.tog}>Job Location</Dropdown.Toggle>

        <Dropdown.Menu style={{ background: "#F2EFEF " ,}}>
          <Dropdown.Item href="#/action-2" style={{ fontWeight : "bold" }}>Ain Shams</Dropdown.Item>
          <Dropdown.Item href="#/action-3"style={{ fontWeight : "bold" }}>cairo </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight : "bold" }}>Giza </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight : "bold" }}>Alexandria</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown style={{paddingTop: "10%" ,}}>
        <Dropdown.Toggle variant="secondary" className={ styles.tog}>Salary</Dropdown.Toggle>

        <Dropdown.Menu style={{ background: "#F2EFEF " ,}}>
          <Dropdown.Item href="#/action-2" style={{ fontWeight : "bold" }}>250$ </Dropdown.Item>
          <Dropdown.Item href="#/action-3"style={{ fontWeight : "bold" }}>150$ </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight : "bold" }}>100$ </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight : "bold" }}> 120$</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default ButtonDarkExample;