import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Icon } from "@iconify/react";
import "bootstrap/dist/css/bootstrap.min.css";
import logoImgae from "../../../../images/Jobber.png";
import styles from "../homePage.module.css";
function CollapsibleExample() {
  return (
    <div className={styles.allnavbar}>
      <img src={logoImgae} title="Logo Image" href="# " alt="logo" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Navbar collapseOnSelect expand="lg" bg="left">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link
                  href="/homepage"
                  style={{
                    color: "#5D5FEF",
                    fontSize: "25px",
                    padding: "1rem",
                    fontWeight: "600",
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{
                    color: "#9F9F9F",
                    fontSize: "25px",
                    padding: "1rem",
                    fontWeight: "600",
                  }}
                >
                  Jobs
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{
                    color: "#9F9F9F",
                    fontSize: "25px",
                    fontWeight: "600",
                    padding: "1rem",
                  }}
                >
                  Notification
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <img
          src={localStorage.getItem("image")}
          alt="profile"
          style={{
            width: "5%",
            height: "2%",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}
export default CollapsibleExample;
