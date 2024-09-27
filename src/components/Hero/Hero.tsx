import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebookSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Hero.css";

interface HeroProps {
  title: string;
  subtitle: string;
  image1: string;
  image2: string;
  joinText?: string;
  buttonSignIn?: React.ReactNode;
  buttonSignInLink?: string;
  buttonStyles?: React.CSSProperties;
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  style?: React.CSSProperties;
  imageStyles?: React.CSSProperties;
  paragraph?: string;
  date?: string;
  removeJoinUsBg?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image1,
  image2,
  joinText,
  buttonSignIn,
  buttonSignInLink,
  socialLinks,
  style,
  imageStyles,
  buttonStyles,
  paragraph,
  date,
  removeJoinUsBg = false,
}) => {
  return (
    <div className="hero-main" style={style}>
      <div className="hero">
        <div className="hero-div1">
          <img
            className="hero-img-1"
            src={image1}
            alt="Hero 1"
            style={imageStyles}
          />
        </div>
        <div className="hero-div2">
          <img
            className="hero-img-2"
            src={image2}
            alt="Hero 2"
            style={imageStyles}
          />
        </div>
      </div>
      <div className="hero-title">
        {paragraph && <p>{paragraph}</p>}
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {date && <p>{date}</p>}
      </div>
      <div className="hero-dot-rectangle"></div>
      <div
        className="hero-joinus"
        style={removeJoinUsBg ? { backgroundColor: "transparent" } : {}}
      >
        <p>{joinText}</p>
      </div>
      {buttonSignIn && buttonSignInLink && (
        <a href={buttonSignInLink} className="hero-button" style={buttonStyles}>
          {buttonSignIn}
        </a>
      )}
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

export default Hero;
