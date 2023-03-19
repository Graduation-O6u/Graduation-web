import Dropdown from 'react-bootstrap/Dropdown';
import styles from "./smalldrop.module.css" ;
function ButtonDarkExample() {
  return (
    <>
      <Dropdown style={{paddingTop: "10%" ,}}>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className={ styles.tog}> Job Title</Dropdown.Toggle>
        <Dropdown.Menu style={{ background: "#F2EFEF " , }}>
          <Dropdown.Item href="#/action-2" style={{ fontWeight : "bold" }}>web developer</Dropdown.Item>
          <Dropdown.Item href="#/action-3"style={{ fontWeight : "bold" }}>mobile developer </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight : "bold" }}>Marketing </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight : "bold" }}>Project Manager</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown style={{paddingTop: "10%" ,}}>
        <Dropdown.Toggle variant="secondary" className={ styles.tog}>  Job Type</Dropdown.Toggle>
        <Dropdown.Menu style={{ background: "#F2EFEF " , }}>
          <Dropdown.Item href="#/action-2" style={{ fontWeight : "bold" }}>IT</Dropdown.Item>
          <Dropdown.Item href="#/action-3"style={{ fontWeight : "bold" }}>IT </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight : "bold" }}>business </Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{ fontWeight : "bold" }}> Manager</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default ButtonDarkExample;