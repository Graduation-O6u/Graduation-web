import React from "react";
import { Nav, Navbar, Col, Row, Container } from "react-bootstrap";
import Drop1 from "./smalldropdown/smalldropdown";
import Drop2 from "./smalldropdown/smalldropdown2";
import Drop3 from "./smalldropdown/smalldropdown3";
import { Icon } from "@iconify/react";
import "./feature.css";
const Drop = ({ type, setType, filter, setFilter }) => {
  const [show, setShow] = React.useState(false);
  const [current, setCurrent] = React.useState(0);
  const filters = [
    { title: "Featured", type: "FeaturedJobs" },
    { title: "Recommended", type: "RecommendedJobs" },
    { title: "Saved", type: "Saved" },
  ];
  return <></>;
};
export default Drop;
