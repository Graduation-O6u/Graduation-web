import React from "react";
// import "./homePage.module.css";
import NavbarHome from "../Navbar-home";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./cards";
import Drop from "./drop";
const Recommend = () => {
  return (
    <>
      <div className="container-home">
        <NavbarHome titleHerf={"/"} />
        <Drop />
        <div className="cardds">
          <Card />
        </div>
      </div>
    </>
  );
};
export default Recommend;
