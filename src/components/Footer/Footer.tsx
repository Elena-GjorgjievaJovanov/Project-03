import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebookSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-left-side">
        <img src="/images/logo.png" alt="Logo Image" />
        <div className="footer-left-side-2row">
          <div className="address-info">
            <p className="address">Адреса</p>
            <p className="address-title">
              Бул. ВМРО бр. 7/1-7 <br />
              1000 Скопје, Македонија
            </p>
          </div>
          <div className="email-info">
            <p className="email">Е-маил</p>
            <p className="email-title">contact@mhra.mk</p>
          </div>
        </div>
      </div>
      <div className="footer-right-side">
        <div className="footer-right-side-subscribe-info">
          <p className="subscribe-title">Претплати се на билтен</p>
          <input id="email" type="email" placeholder="Е-маил" />
        </div>
        <div className="footer-social-media-signs">
          {" "}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
