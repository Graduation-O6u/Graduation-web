import React from "react";
import "./feature.css";
import NavbarHome from "../Navbar-home";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./cards";
import Drop from "./drop";
const Featured = () => {
  return (
    <div>
      <div className="container-home">
        <NavbarHome titleHerf={"/"} />
        <Drop />
        <div className="cardds">
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Featured;
