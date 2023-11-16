import React from "react";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import DespreNoi from "../components/Despre";
import Footer from "../components/Footer";

const Despre = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="DESPRE NOI." text="Află câteva lucruri despre noi." />
      <DespreNoi />
      <Footer />
    </div>
  );
};

export default Despre;
