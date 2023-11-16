import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaMailBulk,
  FaSearchLocation,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaMapMarkerAlt
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div>
              <p>10-14 Fabricii de Zahar </p>
              <h4>Cluj-Napoca, Cluj, RO</h4>
            </div>
          </div>
          <div className="'phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />{" "}
              <a href="tel:+40744932844"> +40 744 932 844 </a>
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              <a href="mailto:contact@autorecovery.ro">
                contact@autorecovery.ro
              </a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Despre compania noastră</h4>
          <p>
            SC AUTO RECOVERY SRL a fost fondată în anul 2006, în Cluj-Napoca,
            din dorința de a aduce pe piața din România servicii de calitate
            englezească în domeniul tractărilor și transportului auto. Firma
            este parteneră cu AUTO RECOVERY SERVICES din Anglia.
          </p>
          <div className="social">
            <a href="https://www.facebook.com" target="_blank">
              <FaFacebook
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://twitter.com/AutoRecoveryRo" target="_blank">
              <FaTwitter
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <FaInstagram
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://www.youtube.com/user/AutoRecoveryCluj"
              target="_blank"
            >
              <FaYoutube
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
