import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="CONTACT." text="Intră în contact cu noi." />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
