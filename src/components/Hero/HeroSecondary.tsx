import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebookSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./HeroSecondary.css";

interface HeroSecondaryProps {
  title: string;
  subtitle: string;
  author?: string;
  date: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  style?: React.CSSProperties;
}

const HeroSecondary: React.FC<HeroSecondaryProps> = ({
  title,
  subtitle,
  author,
  date,
  image,
  socialLinks,
}) => {
  return (
    <div className="hero2-main">
      <div className="hero2-main-inner">
        <img src={image} alt="Hero Image" />
        <div className="hero2-main-info">
          <p>{subtitle}</p>
          <h1>{title}</h1>
          <p>
            <span>{author}</span> | {date}
          </p>
        </div>
      </div>
      <div className="hero-followus">
        <p>Заследи не на социјалните медиуми</p>
        <div>
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          )}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          )}
          {socialLinks.facebook && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          )}
          {socialLinks.youtube && (
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          )}
        </div>
      </div>
      <div className="hero-dots-div"></div>
      <div className="white-div1"></div>
      <div className="white-div2"></div>
      <div className="white-div3"></div>
      <div className="white-div4"></div>
      <div className="white-div5"></div>
    </div>
  );
};

export default HeroSecondary;
