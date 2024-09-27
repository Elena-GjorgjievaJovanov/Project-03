import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Actual-Events-Home.css";

interface Event {
  id: string;
  image: string;
  title: string;
  readmore: string;
}

interface Props {
  fetchUrl?: string;
  events?: Event[];
  title: string;
  style?: React.CSSProperties;
}

const ActualEventsHome: React.FC<Props> = ({
  fetchUrl,
  events: propsEvents,
  title,
  style,
}) => {
  const [events, setEvents] = useState<Event[]>(propsEvents || []);

  useEffect(() => {
    if (fetchUrl) {
      fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => {
          setEvents(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [fetchUrl]);

  useEffect(() => {
    if (propsEvents) {
      setEvents(propsEvents);
    }
  }, [propsEvents]);

  return (
    <div className="actual-events-home" style={style}>
      <h1>{title}</h1>
      <div className="actual-events-home-cards">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="actual-events-home-card">
              <div className="actual-events-home-card-inner">
                <img src={event.image} alt={`Image for ${event.title}`} />
                <div className="actual-events-home-card-info">
                  <h2>{event.title}</h2>
                  <Link to={`/events/${event.id}`}>
                    <p>{event.readmore}</p>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No events available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ActualEventsHome;
