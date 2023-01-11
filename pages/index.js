import React from "react";
import Beg from "../components/Beg";
import Cards from "../components/Cards";
import Contact from "../components/Contact";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Information from "../components/Information";
import NavBar from "../components/NavBar";
import Students from "../components/Students";

const index = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Students />
      <Beg />
      <Cards />
      <Events />
      <Information />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
