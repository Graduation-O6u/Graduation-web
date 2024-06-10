import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../../../images/Jobber.png";
import { useNavigate } from "react-router-dom";

import "../../welcome/welcome.css";
import { LOGOUT_LINK, UNREADNUMBER_URL } from "../../../../constants";
function Navbarr({ titleHerf, type }) {
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
    <>
      <div className="allNavs" style={{ padding: "0 50px" }}>
        <Navbar expand="lg">
          <div className="all3">
            <Navbar.Brand href="#home">
              <img
                src={Logo}
                height="45"
                className="d-inline-block align-top"
                alt=""
              />
            </Navbar.Brand>
            <div className=" bov">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link
                    style={{
                      fontSize: "25px",
                      fontWeight: "600",
                      marginRight: "4%",
                      color: type === "Home" ? "#0074D9" : "#222222",
                    }}
                    href={"homepage"}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    style={{
                      fontSize: "25px",
                      fontWeight: "600",
                      marginRight: "4%",
                      color: type === "jobs" ? "#0074D9" : "#222222",
                    }}
                    href="/jobs"
                  >
                    jobs
                  </Nav.Link>
                  <Nav.Link
                    style={{
                      fontSize: "25px",
                      fontWeight: "600",
                      color: type === "meeting" ? "#0074D9" : "#222222",
                    }}
                    href="/meeting"
                  >
                    Meeting
                  </Nav.Link>
                </Nav>
                <Nav></Nav>
              </Navbar.Collapse>
            </div>
            <div className=" navs">
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
                      right: "5%",
                      padding: "0 8px",
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
                style={{
                  color: "#9F9F9F",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                <img
                  src={image}
                  alt="profile"
                  style={{
                    width: "40px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.target.parentNode.children[1].style.display = "flex";
                    console.log(e.target.parentNode.children[1].style);
                  }}
                />
                <div
                  id="lop"
                  style={{
                    display: "none",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: "white",
                    height: "100px",
                    position: "absolute",
                    fontSize: "18px",
                    padding: "1%",
                    right: "1.5%",
                    boxShadow: "2px 2px 4px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseLeave={(e) => {
                    console.log(e.target.attribute);
                    if (e.target.id === "lop") {
                      e.target.style.display = "none";
                    }
                  }}
                >
                  <span
                    style={{
                      cursor: "pointer",
                      marginBottom: "-10px",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.textDecoration = "underLine")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = "none")
                    }
                    onClick={() => navigate("/user")}
                  >
                    view profile
                  </span>
                  <hr />
                  <span
                    style={{
                      cursor: "pointer",

                      marginTop: "-10px",
                      textDecoration: "none",
                    }}
                    onClick={async () => {
                      await fetch(`${LOGOUT_LINK}`, {
                        method: "GET",
                        headers: myHeaders,
                      })
                        .then((response) => response.json())
                        .then((json) => {
                          navigate("/login");
                          localStorage.clear();
                        });
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.textDecoration = "underLine")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = "none")
                    }
                  >
                    log out
                  </span>
                </div>
              </Navbar.Brand>
            </div>
          </div>
        </Navbar>
      </div>
      <div className="allNavs2" style={{ padding: "0 50px" }}>
        <Navbar expand="lg">
          <div className="all3">
            <Navbar.Brand href="#home">
              <img
                src={Logo}
                height="45"
                className="d-inline-block align-top"
                alt=""
              />
            </Navbar.Brand>

            <div className=" navs">
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
                style={{
                  color: "#9F9F9F",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                <img
                  src={image}
                  alt="profile"
                  style={{
                    width: "40px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.target.parentNode.children[1].style.display = "flex";
                    console.log(e.target.parentNode.children[1].style);
                  }}
                />
                <div
                  id="lop"
                  style={{
                    display: "none",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: "white",
                    height: "100px",
                    position: "absolute",
                    fontSize: "18px",
                    padding: "1%",
                    right: "1.5%",
                    boxShadow: "2px 2px 4px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseLeave={(e) => {
                    console.log(e.target.attribute);
                    if (e.target.id === "lop") {
                      e.target.style.display = "none";
                    }
                  }}
                >
                  <span
                    style={{
                      cursor: "pointer",
                      marginBottom: "-10px",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.textDecoration = "underLine")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = "none")
                    }
                    onClick={() => navigate("/user")}
                  >
                    view profile
                  </span>
                  <hr />
                  <span
                    style={{
                      cursor: "pointer",

                      marginTop: "-10px",
                      textDecoration: "none",
                    }}
                    onClick={async () => {
                      await fetch(`${LOGOUT_LINK}`, {
                        method: "GET",
                        headers: myHeaders,
                      })
                        .then((response) => response.json())
                        .then((json) => {
                          navigate("/login");
                          localStorage.clear();
                        });
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.textDecoration = "underLine")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = "none")
                    }
                  >
                    log out
                  </span>
                </div>
              </Navbar.Brand>
              <div className=" nova" style={{ position: "relative" }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav
                    className="mr-auto"
                    style={{
                      position: "absolute",
                      left: "-100px",
                      top: "50px",
                      backgroundColor: "#eeeeee",
                      padding: "5px 15px",

                      borderRadius: "5%",
                    }}
                  >
                    <Nav.Link
                      style={{
                        fontSize: "25px",
                        fontWeight: "600",
                        marginRight: "4%",
                        color: type === "Home" ? "#0074D9" : "#222222",
                      }}
                      href={"homepage"}
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      style={{
                        fontSize: "25px",
                        fontWeight: "600",
                        marginRight: "4%",
                        color: type === "jobs" ? "#0074D9" : "#222222",
                      }}
                      href="/jobs"
                    >
                      jobs
                    </Nav.Link>
                    <Nav.Link
                      style={{
                        fontSize: "25px",
                        fontWeight: "600",
                        color: type === "meeting" ? "#0074D9" : "#222222",
                      }}
                      href="/meeting"
                    >
                      Meeting
                    </Nav.Link>
                  </Nav>
                  <Nav></Nav>
                </Navbar.Collapse>
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    </>
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
