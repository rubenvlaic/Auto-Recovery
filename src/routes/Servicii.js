import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiciiOferite from "../components/Servicii";
import HeroImage from "../components/HeroImage";

const Servicii = () => {
  return (
    <div>
      <Navbar />
      <HeroImage
        heading="SERVICII."
        text="Oferim o gamă variată de servicii."
      />
      <ServiciiOferite />
      <Footer />
    </div>
  );
};

export default Servicii;
