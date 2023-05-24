import React from "react";
import "./feature.css";
import NavbarHome from "../Navbar-home";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./cards";
import Drop from "./drop";
const Featured = () => {
  const [Type, setType] = React.useState("FeaturedJobs");
  const [filter, setFilter] = React.useState("");
  return (
    <div>
      <div className="container-home">
        <NavbarHome titleHerf={"/"} type={"jobs"} />
        {localStorage.getItem("role") !== "COMPANY" ? (
          <Drop
            type={Type}
            setType={setType}
            filter={filter}
            setFilter={setFilter}
          />
        ) : undefined}
        <div className="cardds">
          <Card type={Type} filter={filter} />
        </div>
      </div>
    </div>
  );
};
export default Featured;
