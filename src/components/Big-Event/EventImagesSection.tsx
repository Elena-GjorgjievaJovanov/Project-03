import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./Big-Event-Hero.css";

interface EventImagesSectionProps {
  imgSrc1?: string;
  imgSrc2?: string;
  link: string;
  linkText: string;
}

const EventImagesSection: React.FC<EventImagesSectionProps> = ({
  imgSrc1,
  imgSrc2,
  link,
  linkText,
}) => {
  return (
    <div className="big-event-home-imgs">
      {imgSrc1 && (
        <div className="circle">
          <img src={imgSrc1} alt="Big Event Image 1" />
        </div>
      )}
      {imgSrc2 && (
        <img className="big-img" src={imgSrc2} alt="Big Event Image 2" />
      )}
      <div className="buy-card-home-div">
        <a className="buy-card-home-div-sign" href={link}>
          <FontAwesomeIcon icon={faLink} />
        </a>
        <div className="buy-card-home-div-text">
          <p>Купи Карта</p>
          <p>{linkText}</p>
        </div>
      </div>
    </div>
  );
};

export default EventImagesSection;
