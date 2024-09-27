import React from "react";
import "./About-Us-Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const AboutUsHome: React.FC = () => {
  return (
    <div className="about-us-home">
      <div className="about-us-home-dots-div1"></div>
      <div className="about-us-home-blank-div1"></div>
      <div className="about-us-home-blank-div2"></div>
      <div className="about-us-home-blank-div3"></div>
      <div className="about-us-home-inner">
        <div className="about-us-home-left">
          <div className="about-us-home-left-inner">
            <img src="/images/auh-img1.png" alt="About Us Image 1" />
            <h1>Дознај повеќе за нас и нашите цели и задачи!</h1>
            <p>
              Нашиот огранок за коучинг е формиран 22 април 2019 година и е
              првата мрежа за професионални ментори во земјава.
            </p>
            <Link to="/about-us">
              <button>Повеќе за нас</button>
            </Link>
          </div>
          <p className="about-us-home-left-info-plus">
            Сакаш да бидеш во тек со нас и најновите содржини што ги
            споделуваме?
          </p>
        </div>
        <div className="about-us-home-right">
          <img src="/images/auh-img2.png" alt="About Us Image 2" />
          <p>
            Претплати се на нашиот информативен билтен и никогаш повеќе не
            пропуштај важни настани и известувања
          </p>
          <div className="about-us-newsletter-link">
            <a className="about-us-home-link-sign" href="/">
              <FontAwesomeIcon icon={faLink} />
            </a>
            <Link to="/sign-up">
              <div className="about-us-newsletter-link-text">
                <p>МАЧР билтен</p>
                <p>contact@mhra.mk</p>
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="about-us-home-dots-div2"></div>
      <div className="about-us-home-dots-div3"></div>
      <div className="about-us-home-dots-div4"></div>
      <div className="about-us-home-dots-div5"></div>
    </div>
  );
};

export default AboutUsHome;
