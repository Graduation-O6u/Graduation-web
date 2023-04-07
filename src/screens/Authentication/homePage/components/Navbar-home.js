import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Icon } from '@iconify/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImgae from "../../../../images/Jobber.png";
import styles from "../homePage.module.css"
function CollapsibleExample() {
return (
    <div className={ styles.allnavbar }>
        <img src={logoImgae} title="Logo Image" href="# "/>
        <div style={{ display:"flex" , flexDirection:"row" , justifyContent:"center", alignItems:"cemter"}}>
        <Navbar collapseOnSelect expand="lg" bg="left">
        <Container >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"  >
            <Nav className="me-auto"></Nav>
            <Nav>
                <Nav.Link href="/homepage" style={{color: "#5D5FEF", fontSize: "25px" , padding:"1rem", fontWeight: "600",}} >Home</Nav.Link>
                <Nav.Link href="#deets" style={{color: "#9F9F9F", fontSize: "25px" ,   padding:"1rem", fontWeight: "600",}}>Jobs</Nav.Link>
                <Nav.Link href="#deets" style={{color: "#9F9F9F", fontSize: "25px" , fontWeight: "600",  padding:"1rem",}}>Notification</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <Nav.Link href="#deets" style={{ color: "#9F9F9F", fontSize: "25px" , fontWeight: "600", padding:"2rem", }}><Icon  style={{borderRadius: "50%" , fontSize: "35px"}} icon="healthicons:ui-user-profile-negative" /></Nav.Link>
        </div>
    </div>
);
}
export default CollapsibleExample;