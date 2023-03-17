import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Icon } from '@iconify/react';
import 'bootstrap/dist/css/bootstrap.min.css';
function CollapsibleExample() {
return (

    <Navbar collapseOnSelect expand="lg" >
        <Container style={{ margin: "1rem" , }}>
            <Navbar.Brand href="#home" style= {{color: "#9F9F9F" , fontSize:"45px" , fontWeight: "600", marginLeft:"2%" , }}>jo<span style={{ color: "#5D5FEF",}}>bb</span>er</Navbar.Brand>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"  >
            <Nav className="me-auto"></Nav>
            <Nav style={{ paddingLeft :"60%", }}  >
                <Nav.Link href="/homepage" style={{color: "#5D5FEF", fontSize: "25px" , padding:"1rem", fontWeight: "600",}} >Home</Nav.Link>
                <Nav.Link href="#deets" style={{color: "black", fontSize: "25px" ,   padding:"1rem", fontWeight: "600",}}>Job</Nav.Link>
                <Nav.Link href="#deets" style={{color: "black", fontSize: "25px" , fontWeight: "600",  padding:"1rem",}}>Network</Nav.Link>
                <Nav.Link href="#deets" style={{ color: "#9F9F9F", fontSize: "25px" , fontWeight: "600",  padding:"1rem",}}><Icon style={{ fontSize: "35px", }}  icon="mdi:chat-outline" /></Nav.Link>
                <Nav.Link href="#deets" style={{ color: "#9F9F9F", fontSize: "25px" , fontWeight: "600",  padding:"1rem",}}><Icon  style={{ fontSize: "35px", }} icon="ion:notifications-outline" /></Nav.Link>
                <Nav.Link href="#deets" style={{ color: "#9F9F9F", fontSize: "25px" , fontWeight: "600", padding:"1rem", }}><Icon  style={{borderRadius: "50%" , fontSize: "35px"}} icon="healthicons:ui-user-profile-negative" /></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}
export default CollapsibleExample;