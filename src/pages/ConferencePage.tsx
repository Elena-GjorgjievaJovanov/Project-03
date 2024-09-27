import React from "react";
import "../styles/SingleEventPage.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroSecondary from "../components/Hero/HeroSecondary";
import Carousel from "../components/Carousel/Carousel";
import "../styles/ConferencePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import EventImagesSection from "../components/Big-Event/EventImagesSection";
import { Link } from "react-router-dom";
import RandomBlogs from "../components/Blog/RandomBlogs";
import RandomEvents from "../components/Actual-Events/RandomEvents";

const ConferencePage = () => {
  const copyLinkToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("Линкот е копиран!");
      })
      .catch((err) => {
        console.error("Copy failed", err);
      });
  };

  return (
    <>
      <Header />
      <HeroSecondary
        title="13та меѓународна МАЧР конференција"
        subtitle="Настан"
        date="24-25 Декември, 2024"
        image="images/conference-img.png"
        socialLinks={{
          linkedin: "https://www.linkedin.com",
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          youtube: "https://www.youtube.com",
        }}
      />
      <Carousel />
      <div className="conference-page-main">
        <div className="conference-page">
          <div className="blogs-links">
            <a href="/">
              <p className="blogs-hp">Почетна</p>
            </a>
            <p className="blogs-sign">&gt;</p>
            <p className="blogs-blog-tag">Годишна конференција</p>
          </div>
          <div className="conference-page-section-1">
            <div className="conference-page-section-1-left">
              <h1>13та меѓународна МАЧР конференција</h1>
              <div className="converence-event-info">
                <div className="converence-event-info-inner">
                  <p>
                    <FontAwesomeIcon icon={faCalendar} />
                  </p>
                  <p>24-25 Декември, 2024</p>
                </div>
                <div className="converence-event-info-inner">
                  <p>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </p>
                  <p>Хотел Континентал, Скопје</p>
                </div>
              </div>
              <p>
                Годишната меѓународна HR конференција, организирана од страна на
                Македонска асоцијација за човечки ресурси, има за цел да ги
                истражи и презентира најновите трендови и практики во областа на
                човечките ресурси кои ќе им помогнат на организациите да станат
                "future fit". Оваа конференција ќе ги собере најдобрите умови и
                лидери во HR за да дискутираат и разменат идеи за проактивни
                стратегии кои можат да ја трансформираат работната сила и да ја
                унапредат организациската ефикасност.
              </p>
              <div className="conference-page-section-1-left-link">
                <EventImagesSection
                  link="/events"
                  linkText="mhraconference.com"
                />
              </div>
            </div>
            <Link to="/sign-up">
              {" "}
              <div className="conference-page-section-1-right">
                <img
                  src="images/conference-image-1.png"
                  alt="Conference Image 1"
                />
                <div className="circle-1">
                  <img
                    src="images/big-event-home-img3.png"
                    alt="Conference Image 2"
                  />
                </div>
                <div className="circle-2">
                  <img
                    src="images/conference-image-1.png"
                    alt="Conference Image 2"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="conference-page-section-2">
            <div className="conference-page-section-2-info">
              <div className="conference-page-section-2-info-inner">
                <p>
                  <FontAwesomeIcon icon={faCalendar} />
                </p>
                <div className="conference-page-section-2-info-inner-inner">
                  <p>2</p>
                  <span>Дена</span>
                </div>
              </div>
              <div className="conference-page-section-2-info-inner">
                <p>
                  <FontAwesomeIcon icon={faUser} />
                </p>
                <div className="conference-page-section-2-info-inner-inner">
                  <p>9</p>
                  <span>Неверојатни Спикери</span>
                </div>
              </div>
              <div className="conference-page-section-2-info-inner">
                <p>
                  <FontAwesomeIcon icon={faMugSaucer} />
                </p>
                <div className="conference-page-section-2-info-inner-inner">
                  <p>6</p>
                  <span>Ресторани</span>
                </div>
              </div>
              <div className="conference-page-section-2-info-inner">
                <p>
                  <FontAwesomeIcon icon={faBook} />
                </p>
                <div className="conference-page-section-2-info-inner-inner">
                  <p>2</p>
                  <span>Дена</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="conference-page-dots-1"></div>
      </div>
      <div className="conference-page-section-3">
        <h1>Специјални гости</h1>
        <p>
          Ова се луѓе од кои дефинитивно има што да се научи. Нивните
          достигнувања се огромни и со нивна помош секторот на HR успеа да
          достигне нови височини. Не пропуштајте ја оваа прилика да ка слушнете,
          а и да научите нешто од нивната мудрост.
        </p>
        <div className="conference-page-section-3-cards">
          <div className="conference-page-section-3-card-row1">
            <div className="conference-page-section-3-card-row1-left">
              <img src="images/conf-img1.png" alt="Conference Image" />
              <div className="conference-page-section-3-card-row1-left-info-1">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <div className="conference-page-section-3-card-row1-left-info-inner">
                  <p>Мајк Вазауски</p>
                  <span>CEO на “Монстер Инк”</span>
                </div>
              </div>
            </div>
            <div className="conference-page-section-3-card-row1-left">
              <img src="images/conf-img2.png" alt="Conference Image" />
              <div className="conference-page-section-3-card-row1-right-info-1">
                <div className="conference-page-section-3-card-row1-right-info-inner">
                  <p>Оливиа Оил</p>
                  <span>CO на “Спинак””</span>
                </div>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
          <div className="conference-page-section-3-card-row2">
            <div className="conference-page-section-3-card-row2-left">
              <img src="images/conf-img3.png" alt="Conference Image" />
              <div className="conference-page-section-3-card-row2-left-info-1">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <div className="conference-page-section-3-card-row2-left-info-inner">
                  <p>Џејмс Суливан</p>
                  <span>Основач на “М.И.””</span>
                </div>
              </div>
            </div>
            <div className="conference-page-section-3-card-row2-left">
              <img src="images/conf-img4.png" alt="Conference Image" />
              <div className="conference-page-section-3-card-row2-right-info-1">
                <div className="conference-page-section-3-card-row2-right-info-inner">
                  <p>Една Моде</p>
                  <span>Oсновач на “E””</span>
                </div>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
          <button>Сите спикери</button>
        </div>
      </div>
      <div className="conference-page-dots-2"></div>
      <div className="conference-details">
        <h1>Агенда на конференцијата</h1>
        <div className="conference-details-days">
          <p>Ден 1</p>
          <p>Ден 2</p>
        </div>
        <div className="conference-details-inner">
          <div className="conference-details-inner-left">
            <div className="conference-details-by-hour">
              <p>10:00</p>
              <div className="conference-details-by-hour-info">
                <p>Регистрација и утринско кафе</p>
                <ul>
                  <li>
                    {" "}
                    Пристигнување и неформално запознавање меѓу учесниците.
                  </li>
                </ul>
              </div>
            </div>
            <div className="conference-details-by-hour">
              <p>10:30</p>
              <div className="conference-details-by-hour-info">
                <p>Вовед и отворање на настанот</p>
                <ul>
                  <li>
                    {" "}
                    Поздравен говор од организаторот и кратко претставување на
                    агендата.
                  </li>
                </ul>
              </div>
            </div>
            <div className="conference-details-by-hour">
              <p>11:00</p>
              <div className="conference-details-by-hour-info">
                <p>
                  Презентација: Важноста на соработката меѓу HR одделот и
                  синдикатот
                </p>
                <ul>
                  <li>
                    {" "}
                    Презентер: <span>Оливиа Оил</span>
                  </li>
                  <li>
                    Клучни точки: Значењето на заедничката работа, придобивки и
                    потенцијални проблеми.
                  </li>
                </ul>
              </div>
            </div>
            <div className="conference-details-by-hour">
              <p>11:45</p>
              <div className="conference-details-by-hour-info">
                <p>Панел дискусија: Искусувања и предизвици во праксата</p>
                <ul>
                  <li>
                    {" "}
                    Модератор: <span>Мајк Вазауски</span>
                  </li>
                  <li>
                    Панелисти: Претставници од HR и синдикатот од различни
                    индустрии.
                  </li>
                </ul>
              </div>
            </div>
            <div className="conference-details-by-hour">
              <p>12:30</p>
              <div className="conference-details-by-hour-info">
                <p>Пауза за ручек и неформални разговори</p>
              </div>
            </div>
            <hr />
            <div className="conference-details-by-hour">
              <p>13:00</p>
              <div className="conference-details-by-hour-info">
                <p>Работилница: Стратегии за подобрување на соработката</p>
                <ul>
                  <li>
                    Водител: <span>Една Моде</span>
                  </li>
                  <li>
                    Практични совети и техники за подобрување на комуникацијата
                    и соработката.
                  </li>
                </ul>
              </div>
            </div>
            <div className="conference-details-by-hour">
              <p>14:00</p>
              <div className="conference-details-by-hour-info">
                <p>Клучни алатки и методи за успешна соработка</p>
                <ul>
                  <li>
                    Презентер: <span>Џејмс Суливан</span>
                  </li>
                  <li>
                    Презентација на алатки и методи кои можат да се применат
                    веднаш.
                  </li>
                </ul>
              </div>
            </div>
            <div className="conference-details-by-hour">
              <p>14:45</p>
              <div className="conference-details-by-hour-info">
                <p>Завршни зборови и заклучоци</p>
                <ul>
                  <li>
                    Сумирање на клучните поенти од настанот и дискусија за
                    понатамошни чекори.
                  </li>
                </ul>
              </div>
            </div>
            <div className="conference-details-by-hour">
              <p>15:00</p>
              <div className="conference-details-by-hour-info">
                <p>Мрежно поврзување и неформално завршување на настанот</p>
                <ul>
                  <li>
                    Можност за неформални разговори и размена на контакти.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="conference-details-inner-right"></div>
        </div>
      </div>
      <div className="conference-page-dots-2"></div>
      <div className="conference-page-section-4">
        <div className="conference-page-section-4-left">
          <img src="images/conf-img1.png" alt="Conference Image" />
          <div className="circle"></div>
          <div className="img-vector">
            <img src="images/vector-2.png" alt="" />
          </div>
        </div>
        <div className="conference-page-section-4-right">
          <h1>Mајк Вазауски</h1>
          <span>CEO на “Монстер Инк”</span>
          <p>
            Придружете се на нас за оваа исклучителна прилика да бидете дел од
            глобалната HR заедница и да придонесете за создавање на организации
            кои се подготвени за иднината преку проактивни HR стратегии.
            Конференцијата е дизајнирана да обезбеди инспирација, знаење и
            мрежни можности кои ќе им помогнат на HR професионалците да бидат
            подготвени за иднината.
          </p>
          <p className="pages">&lt; 2 / 8 &gt;</p>
        </div>
      </div>
      <div className="conference-page-section-5">
        <h1>Пакети за поединци и корпорации</h1>
        <div className="conference-page-dots-3"></div>
        <div className="conference-page-packages">
          <div className="conference-page-packages-card">
            <div className="conference-page-packages-card-top">
              <h1>Поединци</h1>
              <p>1500ден</p>
              <ul>
                <li>1 седиште</li>
                <li>Пауза за ручек</li>
                <li>WiFi</li>
              </ul>
            </div>
            <Link to="/membership">
              <button>КУПИ КАРТА</button>
            </Link>
          </div>
          <div className="conference-page-packages-card">
            <div className="conference-page-packages-card-top">
              <h1>Корпорации</h1>
              <p>20 000ден</p>
              <ul>
                <li>20 седишта</li>
                <li>Паузи за чај и кафе</li>
                <li>Пауза за ручек</li>
                <li>WiFi</li>
              </ul>
            </div>
            <Link to="/membership">
              <button>КУПИ КАРТА</button>
            </Link>
          </div>
        </div>
        <div className="conference-page-dots-4"></div>
        <button onClick={copyLinkToClipboard}>Предложи на пријател</button>
      </div>
      <div className="conference-page-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8147.783724812053!2d21.44953765686701!3d41.9984125111222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smk!4v1726658624080!5m2!1sen!2smk"
          className="map-frame"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <RandomBlogs
        fetchUrl="http://localhost:5001/blogs"
        title="Најнови блогови"
        style={{ marginBottom: "12rem" }}
      />
      <RandomEvents
        fetchUrl="http://localhost:5001/events"
        title="Слични настани"
        style={{ marginBottom: "12rem" }}
      />
      <Footer />
    </>
  );
};

export default ConferencePage;
