import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Actual-Events/Actual-Events-Home.css";

interface Event {
  id: string;
  image: string;
  mainTitle: string;
  readmore: string;
}

interface Props {
  fetchUrl: string;
  title: string;
  style?: React.CSSProperties;
}

const RandomBlogs: React.FC<Props> = ({ fetchUrl, title, style }) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4);
        setEvents(selected);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [fetchUrl]);

  return (
    <div className="actual-events-home" style={style}>
      <h1>{title}</h1>
      <div className="actual-events-home-cards">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="actual-events-home-card">
              <div className="actual-events-home-card-inner">
                <img src={event.image} alt={`Image for ${event.mainTitle}`} />
                <div className="actual-events-home-card-info">
                  <h2>{event.mainTitle}</h2>
                  <Link to={`/blog/${event.id}`}>
                    <p>{event.readmore}</p>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default RandomBlogs;
