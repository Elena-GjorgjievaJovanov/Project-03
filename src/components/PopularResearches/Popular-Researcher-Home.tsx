import React, { useEffect, useState } from "react";
import "./Popular-Researches-Home.css";

interface PopularResearchesHomeProps {
  id: string;
  image: string;
  title: string;
  readmore: string;
}

const PopularResearchesHome: React.FC = () => {
  const [events, setEvents] = useState<PopularResearchesHomeProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/popular-researches-home")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="popular-researches-home">
      <h1>Популарни истражувања</h1>
      <div className="popular-researches-home-cards">
        {events.map((event) => (
          <div key={event.id} className="popular-researches-home-card">
            <div className="popular-researches-home-card-inner">
              <img src={event.image} alt={`Image for ${event.title}`} />
              <div className="popular-researches-home-card-info">
                <h2>{event.title}</h2>
                <a href="/research">
                  <p>{event.readmore}</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularResearchesHome;
