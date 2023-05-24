import React from "react";
import { Nav, Navbar, Col, Row, Container } from "react-bootstrap";
import Drop1 from "./smalldropdown/smalldropdown";
import Drop2 from "./smalldropdown/smalldropdown2";
import Drop3 from "./smalldropdown/smalldropdown3";
import { Icon } from "@iconify/react";
import "./feature.css";
const Drop = ({ type, setType, filter, setFilter }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container className="cont">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="me">
            <Nav className="me-auto">
              <Nav.Link
                className={type !== "FeaturedJobs" ? "feature1" : "feature"}
                onClick={() => setType("FeaturedJobs")}
              >
                Featured Jobs
              </Nav.Link>
              <Nav.Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Nav.Link>
              <Nav.Link
                onClick={() => setType("RecommendedJobs")}
                className={
                  type !== "RecommendedJobs" ? "recommend" : "recommend1"
                }
              >
                Recommended
              </Nav.Link>
              <Nav.Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </Nav.Link>
              <Nav.Link
                className={type !== "Saved" ? "saved" : "saved2"}
                onClick={() => setType("Saved")}
              >
                Saved
              </Nav.Link>
              <Nav.Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </Nav.Link>
              <Nav.Link>
                <button
                  onClick={() => setShow(!show)}
                  style={{
                    background: show ? "#FBFBFB" : "#F7F7F7",
                    boxShadow: show
                      ? "5px 5px 5px 2px rgba(0, 0, 0, .1)"
                      : "none",
                    borderRadius: show ? " 50%" : "none",
                    border: "none",
                  }}
                >
                  <Icon
                    icon="material-symbols:filter-list-rounded"
                    className="list-round"
                  />
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="drop">
        {show && (
          <Container className="eventsNav ">
            <Row>
              <Col xs="13" md="4" className="text-left">
                <Drop1 filter={filter} setFilter={setFilter} />
              </Col>
              <Col xs="13" md="4" className="text-left">
                <Drop2 filter={filter} setFilter={setFilter} />
              </Col>
              <Col xs="13" md="4" className="text-left">
                <Drop3 filter={filter} setFilter={setFilter} />
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
};
export default Drop;
