import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/EventsPage.css";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ActualEventsHome from "../components/Actual-Events/Actual-Events-Home";
import CalendarSection from "../components/Calendar/CalendarSection";

const EventsPage: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState<any[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [title, setTitle] = useState<string>("Сите настани");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("q") || "";
    setSearchQuery(query);
  }, [location.search]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5001/events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMonthChange = (month: Date) => {
    setCurrentMonth(month);
  };

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);

    const titles: { [key: string]: string } = {
      all: "Сите настани",
      "HR Cafe": "HR Кафе",
      "HR Weekend": "HR Викенд",
      "HR Webinar": "HR Вебинар",
      "HR Conference": "HR Конференции",
    };

    setTitle(titles[category] || "Сите настани");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/events?q=${encodeURIComponent(searchQuery)}`);
  };

  const getEventsForCategory = (category: string) => {
    let filteredEvents = events;
    if (category !== "all") {
      filteredEvents = events.filter((event) => event.category === category);
    }

    if (searchQuery) {
      filteredEvents = filteredEvents.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredEvents;
  };

  const getButtonStyles = () => {
    if (windowWidth >= 1920) {
      return {
        position: "absolute",
        left: "56rem",
        top: "29.5rem",
      } as React.CSSProperties; // Ensure the style object is cast to React.CSSProperties
    } else {
      return {
        position: "absolute",
        left: "42rem",
        top: "23.5rem",
      } as React.CSSProperties;
    }
  };

  return (
    <>
      <Header />
      <Hero
        paragraph="Истакнат Настан"
        title="HR Кафе"
        subtitle="Овој четврток кафе на тема како да примените техники и чекори од селф коучинг за подобро да се водите себеси..."
        date="l 25 Јули, 2024"
        image1="images/ae-img1.png"
        image2="images/ae-img1.png"
        imageStyles={{
          objectPosition: "left",
          transform: "scaleX(-1)",
        }}
        buttonSignIn="Прочитај повеќе"
        buttonSignInLink="/events/254444AQA"
        removeJoinUsBg={true}
        socialLinks={{
          linkedin: "https://www.linkedin.com",
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          youtube: "https://www.youtube.com",
        }}
        buttonStyles={getButtonStyles()}
      />

      <div className="events-page-calendar-section">
        <div className="blogs-links">
          <a href="/">
            <p className="about-us-hp">Почетна </p>
          </a>
          <p className="blogs-sign">&gt;</p>
          <p className="blogs-blog-tag">Настани</p>
        </div>
        <CalendarSection
          currentMonth={currentMonth}
          events={events}
          handleMonthChange={handleMonthChange}
        />

        <div className="events-page-calendar-section-filters">
          <p
            className={`filter-all ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            Сите
          </p>
          <p
            className={`filter-hr-cafe ${
              activeFilter === "HR Cafe" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("HR Cafe")}
          >
            HR Кафе
          </p>
          <p
            className={`filter-hr-weekend ${
              activeFilter === "HR Weekend" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("HR Weekend")}
          >
            HR Викенд
          </p>
          <p
            className={`filter-hr-webinar ${
              activeFilter === "HR Webinar" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("HR Webinar")}
          >
            HR Вебинар
          </p>
          <p
            className={`filter-hr-conference ${
              activeFilter === "HR Conference" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("HR Conference")}
          >
            HR Конференции
          </p>
        </div>
        <div className="filter-all-row">
          <h1 className="events-page-calendar-section-filters-h1">{title}</h1>

          <div className="events-page-search">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Пребарај"
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
              />
            </form>
          </div>
        </div>

        <div
          className={`events-category-section ${
            activeFilter === "HR Cafe" || activeFilter === "all"
              ? "visible"
              : "hidden"
          }`}
        >
          <ActualEventsHome
            title="HR Кафе"
            events={getEventsForCategory("HR Cafe")}
            style={{ padding: "8rem 0 0 0" }}
          />
        </div>

        <div
          className={`events-category-section ${
            activeFilter === "HR Weekend" || activeFilter === "all"
              ? "visible"
              : "hidden"
          }`}
        >
          <ActualEventsHome
            title="HR Викенд"
            events={getEventsForCategory("HR Weekend")}
            style={{ padding: "8rem 0 0 0" }}
          />
        </div>

        <div
          className={`events-category-section ${
            activeFilter === "HR Webinar" || activeFilter === "all"
              ? "visible"
              : "hidden"
          }`}
        >
          <ActualEventsHome
            title="HR Вебинар"
            events={getEventsForCategory("HR Webinar")}
            style={{ padding: "8rem 0 0 0" }}
          />
        </div>

        <div
          className={`events-category-section ${
            activeFilter === "HR Conference" || activeFilter === "all"
              ? "visible"
              : "hidden"
          }`}
        >
          <ActualEventsHome
            title="HR Конференции"
            events={getEventsForCategory("HR Conference")}
            style={{ padding: "8rem 0 0 0" }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
