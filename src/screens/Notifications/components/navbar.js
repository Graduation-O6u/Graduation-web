import { Icon } from '@iconify/react';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from "../../../images/Jobber.png";
import '../../Authentication/welcome/welcome.css';
function Navbarr() {
  return (
    <div style={{ margin:"1% 4%" }} >
      <Navbar  expand="lg" className='lo'>
        <Navbar.Brand href="#home">
        <img
          src={Logo}
          height="30"
          className="d-inline-block align-top"
          alt=''
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='log'>
        <Nav className="mr-auto" style={{ width: "60%" , justifyContent: "end" , marginRight:"7%"}}>
          <Nav.Link style={{ fontSize:"25px" , fontWeight:"600" , marginRight:"4%" ,}} href="/homepage" >Home</Nav.Link>
          <Nav.Link style={{ fontSize:"25px" , fontWeight:"600" , marginRight:"4%" ,}} href=" " >jobs</Nav.Link>
          <Nav.Link style={{ ontSize:"25px" , fontWeight:"600" , color:"#5d5fef"  }} href="/notifaction">Notification</Nav.Link>
        </Nav>
        <Nav>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand  href="#deets" style={{ color: "#9F9F9F", fontSize: "25px" , fontWeight: "600", }}><Icon  style={{borderRadius: "50%" , fontSize: "35px"}} icon="healthicons:ui-user-profile-negative" /></Navbar.Brand>
    </Navbar>
    </div>
  );
}
 export default Navbarr;