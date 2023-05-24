import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../../../images/Jobber.png";
import "../welcome.css";
function Navbarr() {
  return (
    <div style={{ margin: "1% 4%", background: "#f7f7f7f7" }}>
      <Navbar expand="lg" className="lo">
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            height="45"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="log">
          <Nav
            className="mr-auto"
            style={{ width: "60%", justifyContent: "end", marginRight: "5%" }}
          >
            <Nav.Link
              style={{
                color: "#0074D9",
                fontSize: "20px",
                fontWeight: "600",
                marginRight: "4%",
              }}
              href="#welcome"
            >
              Welcome
            </Nav.Link>
            <Nav.Link
              style={{ fontSize: "20px", fontWeight: "600", marginRight: "4%" }}
              href="#about"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              style={{ fontSize: "20px", fontWeight: "600" }}
              href="#contact"
            >
              Contact US
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">
              <div class="button-container-1">
                <span class="mas">Login</span>
                <button id="work" type="button" name="Hover">
                  Login
                </button>
              </div>
            </Nav.Link>
            <Nav.Link href="/signup">
              <button
                style={{
                  color: "#0074D9",
                  border: "none",
                  background: "transparent",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Signup
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Navbarr;
