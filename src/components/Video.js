import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";

import backVideo from "../assets/back.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={backVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Auto Recovery</h1>
        <p>Suntem acolo unde ai nevoie sa fim</p>
        <div>
          <Link to="/servicii" className="btn">
            Servicii
          </Link>
          <Link to="tel:+40744932844" className="btn btn-light">
            +40744 932 844
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
