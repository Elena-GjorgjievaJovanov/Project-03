import React, { useEffect, useState } from "react";
import "../styles/BlogsPage.css";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import Blog from "../components/Blog/Blog";

interface Event {
  id: string;
  image: string;
  mainTitle: string;
  readmore: string;
  category: string;
}

const BlogsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5001/blogs")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const getEventsForCategory = (category: string) => {
    if (category === "all" || category === "") {
      return events;
    }
    return events.filter((event) => event.category === category);
  };

  return (
    <>
      <Header />
      <Hero
        title="Како до најдобар избор при процесот на регрутација"
        subtitle="Oд Ѓоко Вукановски l 20 Јуни, 2024"
        image1="images/blog-img555.png"
        image2="images/blog-img555.png"
        buttonSignIn="Прочитај повеќе"
        buttonSignInLink="/blog/A111112T"
        removeJoinUsBg={true}
        socialLinks={{
          linkedin: "https://www.linkedin.com",
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          youtube: "https://www.youtube.com",
        }}
      />
      <Carousel />
      <div className="blogs-page">
        <div className="blogs-links">
          <a href="/">
            <p className="about-us-hp">Почетна </p>
          </a>
          <p className="blogs-sign">&gt;</p>
          <p className="blogs-blog-tag">Блогови</p>
        </div>
        <div className="be-active-section">
          <img src="../../images/be-actime.png" alt="Be Active Image" />
          <div className="be-active-section-text">
            <h1>
              Биди <span>активен/на</span>, споделувај настани на социјаните
              медиуми, собирај поени, добивај значки и рамки, кани пријатели на
              настани и освојувај попусти за следната купена карта
            </h1>
            <p>
              Доколку овој месец си најактивен/а во форумот добиваш награди за
              да го направиш твојот профил уникатен, а ако каниш пријатели и тие
              купат карта преку твојот линк за покана добиваш попуст на следната
              купена карта за настан.
            </p>
          </div>
        </div>
        <div className="new-blogs">
          <div className="blogs-filters">
            <p
              className={activeFilter === "" ? "active" : ""}
              onClick={() => handleFilterClick("")}
            >
              Сите
            </p>
            <p
              className={activeFilter === "Регрутирање" ? "active" : ""}
              onClick={() => handleFilterClick("Регрутирање")}
            >
              Регрутирање
            </p>
            <p
              className={activeFilter === "Компензaции" ? "active" : ""}
              onClick={() => handleFilterClick("Компензaции")}
            >
              Компензaции
            </p>
            <p
              className={activeFilter === "HR согласност" ? "active" : ""}
              onClick={() => handleFilterClick("HR согласност")}
            >
              HR согласност
            </p>
            <p
              className={
                activeFilter === "Организациска структура" ? "active" : ""
              }
              onClick={() => handleFilterClick("Организациска структура")}
            >
              Организациска структура
            </p>
            <p
              className={activeFilter === "Обучување" ? "active" : ""}
              onClick={() => handleFilterClick("Обучување")}
            >
              Обучување
            </p>
            <p
              className={activeFilter === "Развој" ? "active" : ""}
              onClick={() => handleFilterClick("Развој")}
            >
              Развој
            </p>
            <p
              className={
                activeFilter === "Менаџмент на перформанси" ? "active" : ""
              }
              onClick={() => handleFilterClick("Менаџмент на перформанси")}
            >
              Менаџмент на перформанси
            </p>
          </div>
        </div>
      </div>
      <Blog
        title="Тема: Култура во компанијата"
        events={getEventsForCategory(activeFilter)}
        style={{ marginBottom: "8rem" }}
      />

      <div className="new-blogs-content-main">
        <h1>Најнови блогови</h1>
        <div className="new-blogs-content">
          <div className="new-blogs-content-left">
            <div className="new-blogs-content-left">
              <div className="new-blogs-content-left-row1">
                <div className="new-blogs-content-big-card">
                  <img src="/images/blog-img1.png" alt="Blog Image" />
                  <div className="new-blogs-content-big-card-text">
                    <h2>Техники за управување со стрес на работното место</h2>
                    <a href="/blog/A111112R">
                      <p>Прочитај повеќе</p>
                    </a>
                  </div>
                </div>
                <div className="new-blogs-content-small-card">
                  <div className="new-blogs-content-small-card-overlay"></div>
                  <img src="/images/blog-img-bg1.png" alt="Image" />
                  <div className="new-blogs-content-small-card-info">
                    <h2>Предложен настан:</h2>
                    <p className="p-1">
                      HR викенд: <br />
                      Управување со стрес...
                    </p>
                    <p className="p-2">Авг</p>
                    <p className="p-3">16</p>
                    <a href="/events/254446AQH">
                      <span>Прочитај повеќе</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="new-blogs-content-left-row2">
                <div className="new-blogs-content-small-card">
                  <div className="new-blogs-content-small-card-overlay"></div>
                  <img src="/images/blog-img-bg3.png" alt="Image" />
                  <div className="new-blogs-content-small-card-info">
                    <h2>Предложен настан:</h2>
                    <p className="p-1">
                      HR викенд: <br />
                      Организација во организаци...
                    </p>
                    <p className="p-2">Јун</p>
                    <p className="p-3">24</p>
                    <a href="/events/254445AQF">
                      <span>Прочитај повеќе</span>
                    </a>
                  </div>
                </div>
                <div className="new-blogs-content-big-card">
                  <img src="/images/blog-img2.png" alt="Blog Image" />
                  <div className="new-blogs-content-big-card-text">
                    <h2>Техники за управување со стрес на работното место</h2>
                    <a href="/blog/A111112R">
                      <p>Прочитај повеќе</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="new-blogs-content-right">
            <div className="new-blogs-content-right-overlay"></div>
            <img src="/images/blog-img-bg2.png" alt="Image" />
            <div className="new-blogs-content-right-info">
              <h1>Најнови огласи:</h1>
              <div className="new-blogs-content-right-row">
                <img
                  className="blog-img-logo"
                  src="/images/h-logo.png"
                  alt="Blog Icon"
                />
                <p>HR админ</p>
              </div>
              <div className="new-blogs-content-right-row">
                <img src="/images/blog-icon-1.png" alt="Blog Icon" />
                <p>Практикант</p>
              </div>
              <div className="new-blogs-content-right-row">
                <img
                  className="blog-img-logo"
                  src="/images/h-logo.png"
                  alt="Blog Icon"
                />
                <p>Практикант</p>
              </div>
              <div className="new-blogs-content-right-row">
                <img
                  className="blog-img-logo"
                  src="/images/h-logo.png"
                  alt="Blog Icon"
                />
                <p>Извршен менаџер</p>
              </div>
              <div className="new-blogs-content-right-row">
                <img src="/images/blog-icon-2.png" alt="Blog Icon" />
                <p>HR Практикант</p>
              </div>
              <div className="new-blogs-content-right-row">
                <img src="/images/blog-icon-1.png" alt="Blog Icon" />
                <p>Management trainee</p>
              </div>
              <div className="new-blogs-content-right-row">
                <img src="/images/blog-icon-3.png" alt="Blog Icon" />
                <p>Менаџер за HR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogsPage;
