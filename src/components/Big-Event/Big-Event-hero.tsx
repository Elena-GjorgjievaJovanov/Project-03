import React, { useEffect, useState } from "react";
import "./Big-Event-Hero.css";
import EventImagesSection from "./EventImagesSection";

const BigEventHome: React.FC = () => {
  return (
    <div className="big-event-home-main">
      <div className="big-event-home">
        <div className="big-event-home-info">
          <h1>
            Најголемиот HR настан на нашите простори - Годишната <b>HR</b>{" "}
            конференција на МАЧР
          </h1>
          <p className="big-event-home-info-p">
            Меѓународна размена на искуства во полето на човечки ресурси и
            константно движење во чекор со светските трендови.
          </p>
          <div className="big-event-home-president">
            <img
              src="/images/big-event-home-img1.png"
              alt="Big Event Image President"
            />
            <div className="big-event-home-president-info">
              <p>м-р Дарко Петровски</p>
              <p>Претседател на МАЧР</p>
            </div>
          </div>
        </div>
        <EventImagesSection
          imgSrc1="/images/big-event-home-img2.png"
          imgSrc2="/images/big-event-home-img3.png"
          link="/events"
          linkText="mhraconference.com"
        />
      </div>
      <div className="big-event-dots-div"></div>
      <div className="big-event-blank-div1"></div>
      <div className="big-event-blank-div2"></div>
      <div className="big-event-blank-div3"></div>
      <div className="big-event-blank-div4"></div>
    </div>
  );
};

export default BigEventHome;
