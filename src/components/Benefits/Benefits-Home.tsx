import React from "react";
import "./Benefits-Home.css";
import { Link } from "react-router-dom";

const BenefitsHome: React.FC = () => {
  return (
    <div className="benefits-home">
      <div className="benefits-home-events">
        <div className="benefits-home-event">
          <p>01</p>
          <div className="benefits-home-event-p2">
            <h1>Едукативни настани</h1>
            <Link to="/events">
              <p>Прочитај повеќе</p>
            </Link>
          </div>
        </div>
        <div className="benefits-home-event">
          <p>02</p>
          <div className="benefits-home-event-p2">
            <h1>Најнови информации и случувања</h1>
            <Link to="/about-us">
              <p>Прочитај повеќе</p>{" "}
            </Link>
          </div>
        </div>
        <div className="benefits-home-event">
          <p>03</p>
          <div className="benefits-home-event-p2">
            <h1>Ширење на мрежата на контакти</h1>
            <Link to="/about-us">
              <p>Прочитај повеќе</p>
            </Link>
          </div>
        </div>
        <div className="benefits-home-event">
          <p>04</p>
          <div className="benefits-home-event-p2">
            <h1>Вклучување во работењето на МАЧР</h1>
            <Link to="/membership">
              <p>Прочитај повеќе</p>
            </Link>
          </div>
        </div>
        <div className="benefits-home-event">
          <p>05</p>
          <div className="benefits-home-event-p2">
            <h1>HR огласи за работа</h1>
            <Link to="/jobs">
              <p>Прочитај повеќе</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="benefits-home-info">
        <h1>Бенефити од зачленување во МАЧР</h1>
        <p>
          Македонската асоцијација за човечки ресурси - МАЧР како невладино,
          непрофитно и непартиско здружение на граѓани, продолжува со
          остварување на својата мисија за промоција и унапредување на
          професијата управување со човечките ресурси, како и создавање и
          имплементирање на највисоките професионални стандарди и развој на
          човечкиот капитал во Република Македонија како единствен ентитет од
          овој вид во земјава.
        </p>
      </div>
    </div>
  );
};

export default BenefitsHome;
