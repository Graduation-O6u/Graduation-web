import React from "react";
import { Col, Row, Container } from "react-bootstrap";
// import { Icon } from '@iconify/react';
import Drop1 from "../Feature/smalldropdown/smalldropdown";
import Drop2 from "../Feature/smalldropdown/smalldropdown2";
import Drop3 from "../Feature/smalldropdown/smalldropdown3";
import "./recommend.css";
const Drop = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div className="feature1"> Featured Jobs</div>
      <div className="recommend1">Recommended</div>
      <div className="saved1">Saved</div>

      <div className="drop">
        {show && (
          <Container className="eventsNav ">
            <Row>
              <Col xs="13" md="4" className="text-left">
                <Drop1 />
              </Col>
              <Col xs="13" md="4" className="text-left">
                <Drop2 />
              </Col>
              <Col xs="13" md="4" className="text-left">
                <Drop3 />
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
};
export default Drop;
