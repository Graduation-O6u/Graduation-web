import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../../../images/Jobber.png";
import { useNavigate } from "react-router-dom";

import "../../welcome/welcome.css";
import { UNREADNUMBER_URL } from "../../../../constants";
function Navbarr({ titleHerf }) {
  const navigate = useNavigate();
  const [notiNumber, setNotiNumber] = useState(0);

  useEffect(() => {
    unRead();
  }, []);
  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("Access Token")}`,
  });
  const image = localStorage.getItem("image");
  return (
    <div style={{ margin: "1% 4%" }}>
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
            style={{ width: "60%", justifyContent: "end", marginRight: "7%" }}
          >
            <Nav.Link
              style={{
                fontSize: "25px",
                fontWeight: "600",
                marginRight: "4%",
                color: "#0074D9",
              }}
              href={titleHerf}
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{ fontSize: "25px", fontWeight: "600", marginRight: "4%" }}
              href="/jobs"
            >
              jobs
            </Nav.Link>
            <Nav.Link
              style={{ fontSize: "25px", fontWeight: "600" }}
              href="/meeting"
            >
              Meeting
            </Nav.Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/notifications">
          <Icon
            icon="ic:outline-notifications"
            style={{
              color: notiNumber > 0 ? "#FF0000" : "#9F9F9F",
              fontSize: "35px",
              marginLeft: "35px",
            }}
          />
          {notiNumber > 0 ? (
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "10%",
                backgroundColor: "#FF0000",
                borderRadius: "50%",
                height: "25px",
                width: "fit-content",
                color: "white",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "2px",
                }}
              >
                {notiNumber}
              </span>
            </div>
          ) : undefined}
        </Navbar.Brand>
        <Navbar.Brand
          href="/user"
          style={{ color: "#9F9F9F", fontSize: "25px", fontWeight: "600" }}
        >
          <img
            src={image}
            alt="profile"
            style={{
              width: "40px",
              borderRadius: "50%",
            }}
          />
        </Navbar.Brand>
      </Navbar>
    </div>
  );

  function getcard(e) {
    if (e["message"] === "Unauthorized") {
      navigate("/login");
    } else {
      setNotiNumber(e["data"]["size"]);
    }
  }
  async function unRead() {
    await fetch(`${UNREADNUMBER_URL}`, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((json) => getcard(json));
  }
}
export default Navbarr;
