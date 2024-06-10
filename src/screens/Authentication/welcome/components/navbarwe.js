import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../welcome.css";
import logoImgae from "../../../../images/Jobber.png";

function Navbarr() {
  return (
    <>
      <div className="all">
        <img src={logoImgae} alt="Logo" className={"logoimg"} />

        <Nav className="taps">
          <Nav.Link
            style={{
              color: "#0074D9",
              fontSize: "20px",
              fontWeight: "600",
            }}
            href="#welcome"
          >
            Welcome
          </Nav.Link>
          <Nav.Link
            style={{ fontSize: "20px", fontWeight: "600" }}
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
        <Nav className="buttons">
          <Nav.Link href="/login">
            <button
              style={{
                border: "none",
                background: "transparent",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Login
            </button>
          </Nav.Link>
          <Nav.Link href="/signup">
            <button
              style={{
                padding: "5px 10px",
                borderRadius: "10%",
                border: "none",
                color: "#ffffff",
                background: "#0074D9",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Signup
            </button>
          </Nav.Link>
        </Nav>
        <div className=" all2">
          <Navbar expand="lg" className="lo">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="log">
              <Nav
                className="mr-auto"
                style={{
                  width: "60%",
                  justifyContent: "end",
                  marginRight: "5%",
                }}
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
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginRight: "4%",
                  }}
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
      </div>
    </>
  );
}
export default Navbarr;
