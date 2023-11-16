import React from "react";
import { Link } from "react-router-dom";
import "./ServiciiStyles.css";

const Servicii = () => {
  return (
    <div className="servicii">
      <div className="card-container">
        <div className="card">
          <h3>- TRACTĂRI -</h3>
          <span className="bar"></span>
          <p className="btc">Oferim serviciul de tractări auto pentru:</p>
          <p>- Camioane -</p>
          <p>- Autobuze -</p>
          <p>- Tiruri -</p>
          <p>- Utilaje de mare tonaj -</p>
          <Link to="/contact" className="btn">
            Cere oferta
          </Link>
        </div>
        <div className="card">
          <h3>- TRANSPORT -</h3>
          <span className="bar"></span>
          <p className="btc">Efectuam servicii de transport pentru:</p>
          <p>- Utilaje -</p>
          <p>- Autivehicule -</p>
          <p>- Autoturisme defecte -</p>
          <p>- Camioane -</p>
          <Link to="/contact" className="btn">
            Cere oferta
          </Link>
        </div>
        <div className="card">
          <h3>- DEGAJARE CAROSABIL -</h3>
          <span className="bar"></span>
          <p className="btc">
            Intervenim în vederea degajării drumurilor pentru:
          </p>
          <p>- Aluviuni -</p>
          <p>- Copaci -</p>
          <p>- Masini avariate -</p>
          <p>- Alte intervenții -</p>
          <Link to="/contact" className="btn">
            Cere oferta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Servicii;
