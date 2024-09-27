import React, { useEffect, useState } from "react";
import "./Carousel.css";

interface Event {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  month: string;
  date: string;
}

const Carousel: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/carousel")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <div className="carousel-items">
          {events.map((event) => (
            <div key={event.id} className="carousel-item">
              <img className="carousel-image" src={event.image} alt="Image" />
              <div className="carousel-overlay"></div>
              <div className="carousel-info">
                <p className="carousel-title">{event.title}</p>
                <p className="carousel-subtitle">{event.subtitle}</p>
                <p className="carousel-month">{event.month}</p>
                <p className="carousel-date">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-items">
          {events.map((event) => (
            <div key={event.id + "-duplicate"} className="carousel-item">
              <img className="carousel-image" src={event.image} alt="Image" />
              <div className="carousel-overlay"></div>
              <div className="carousel-info">
                <p className="carousel-title">{event.title}</p>
                <p className="carousel-subtitle">{event.subtitle}</p>
                <p className="carousel-month">{event.month}</p>
                <p className="carousel-date">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
