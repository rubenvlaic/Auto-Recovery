import React from "react";
import "./DespreStyles.css";

import { Link } from "react-router-dom";

import Galerie1 from "../assets/galerie1.jpg";
import Galerie2 from "../assets/galerie2.jpg";
import Galerie3 from "../assets/galerie3.jpg";

const Despre = () => {
  return (
    <div className="despre">
      <div className="left">
        <h1>Progresul nostru</h1>
        <p>
          În anul 2006 AUTO RECOVERY a achiziționat prima autospecializată
          pentru transport auto și transport utilaje, iar la începutul anului
          2008 a achiziționat a doua autospecializată pentru tractări auto și
          tractări camioane din dorința de a satisface necesitățile acestor
          segmente de piață.
        </p>
        <p>
          Firma noastră specializată în tractări și remorcări auto vă stă la
          dispoziție la orice oră, cu servicii complete de tractări auto în
          județul Cluj și pe teritoriul Romaniei. Serviciile noastre sunt
          oferite NON STOP
        </p>
        <Link to="/contact">
          <button className="btn">Contactează-ne</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Galerie1} className="img" alt="" />
          </div>
          <div className="image-stack bottom">
            <img src={Galerie2} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Despre;
