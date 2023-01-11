import React from "react";
import Beg from "../components/Beg";
import Cards from "../components/Cards";
import Events from "../components/Events";
import NavBar from "../components/NavBar";
import Students from "../components/Students";

const index = () => {
  return (
    <div>
      <NavBar />
      <Students />
      <Beg />
      <Cards />
      <Events />
    </div>
  );
};

export default index;
