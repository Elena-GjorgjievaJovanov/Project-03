import React, { useEffect, useState } from "react";
import "../styles/SingleEventPage.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroSecondary from "../components/Hero/HeroSecondary";
import Carousel from "../components/Carousel/Carousel";
import EventImagesSection from "../components/Big-Event/EventImagesSection";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import RandomEvents from "../components/Actual-Events/RandomEvents";
import NotFound from "./NotFoundPage";

interface CompanyMember {
  id: string;
  image: string;
  name: string;
  companyPosition: string;
}

interface AgendaItem {
  time: string;
  event: string;
  details?: string;
  detailsPresenter?: string;
  detailsPresenterName?: string;
}

interface Speaker {
  id: string;
  image: string;
  name: string;
  companyPosition: string;
}

interface EventData {
  id: string;
  image: string;
  title: string;
  readmore: string;
  category: string;
  date: string;
  title2: string;
  topic: string;
  descriptionTitle: string;
  description: string;
  purposeTitle: string;
  purposeDescription: string;
  image2: string;
  agenda?: AgendaItem[];
  speakers?: Speaker[];
  agendaDate: string;
}

const SingleEventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventData | undefined>(undefined);
  const [companyMembers, setCompanyMembers] = useState<CompanyMember[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<CompanyMember[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5001/events/${id}`)
      .then((response) => response.json())
      .then((data: EventData) => setEvent(data))
      .catch((error) => console.error("Error fetching event:", error));

    fetch("http://localhost:5001/company-members")
      .then((response) => response.json())
      .then((data: CompanyMember[]) => {
        setCompanyMembers(data);
        setFilteredMembers(
          data.filter((member) =>
            ["111120", "111121", "111122"].includes(member.id)
          )
        );
      })
      .catch((error) =>
        console.error("Error fetching company members:", error)
      );
  }, [id]);

  const handleCopyLink = () => {
    console.log("Button clicked, attempting to copy the link.");
    const pageUrl = window.location.href;
    navigator.clipboard
      .writeText(pageUrl)
      .then(() => {
        console.log("URL copied successfully!");
        alert("Линкот е копиран!");
      })
      .catch((err) => {
        console.error("Failed to copy the URL", err);
      });
  };

  if (!event) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <HeroSecondary
        title="Како до најдобар избор при процесот на регрутација"
        subtitle="Настан"
        date="25 Јули, 2024   "
        image="images/ae-img1.png"
        socialLinks={{
          linkedin: "https://www.linkedin.com",
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          youtube: "https://www.youtube.com",
        }}
      />
      <Carousel />
      <div className="single-event-page">
        <div className="blogs-links">
          <a href="/">
            <p className="blogs-hp">Почетна</p>
          </a>
          <p className="blogs-sign">&gt;</p>
          <a href="/events">
            <p className="blogs-hp">Настани</p>
          </a>
          <p className="blogs-sign">&gt;</p>
          <a href="/events/hr-cafe">
            <p className="blogs-hp">HR кафе</p>
          </a>
          <p className="blogs-sign">&gt;</p>
          <p className="blogs-blog-tag">Информации за настан</p>
        </div>
        <h1>{event.title2}</h1>
        <h2>{event.topic}</h2>
        <div className="single-event-page-description">
          <div className="single-event-page-description-left">
            <h3>{event.descriptionTitle}</h3>
            <p>{event.description}</p>
            <h3>{event.purposeTitle}</h3>
            <p>{event.purposeDescription}</p>
          </div>
          <div className="single-event-page-description-right">
            <Link to="/events">
              <EventImagesSection
                imgSrc2={event.image2}
                link="/events"
                linkText="mhraconference.com"
              />
            </Link>
          </div>
        </div>
        <div className="event-details">
          <h3>Агенда на настанот:</h3>
          <p className="event-day">{event.agendaDate}</p>
          <div className="event-details-inner">
            <div className="event-details-inner-left">
              {event.agenda?.map((item: AgendaItem, index: number) => (
                <div className="event-details-by-hour" key={index}>
                  <p>{item.time}</p>
                  <div className="event-details-by-hour-info">
                    <p>{item.event}</p>
                    {item.details && (
                      <ul>
                        {item.details && <li>{item.details}</li>}
                        {item.detailsPresenter && (
                          <li>
                            Презентер: <span>{item.detailsPresenterName}</span>
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="event-details-inner-right"></div>
          </div>
        </div>
        <div className="event-speakers">
          <div className="event-speakers-left">
            <p>Говорници на настанот:</p>
            <div className="event-speakers-left-dots"></div>
          </div>
          <div className="event-speakers-right">
            <div className="company-members-section">
              {filteredMembers.map((member: CompanyMember) => (
                <div className="company-member-section-inner" key={member.id}>
                  <div className="company-member-section-card">
                    <img src={member.image} alt={`Image for ${member.name}`} />
                    <p className="member-name">{member.name}</p>
                    <p className="member-position">{member.companyPosition}</p>
                    <div className="member-social-media-links">
                      <a href={`https://www.facebook.com/${member.id}`}>
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a href={`https://www.twitter.com/${member.id}`}>
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a href={`https://www.instagram.com/${member.id}`}>
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a href={`https://www.linkedin.com/in/${member.id}`}>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="events-prices">
          <div className="individual-price">
            <p>Цена за поединци</p>
            <p>500мкд</p>
          </div>
          <div className="company-price">
            <p>Цена за компании</p>
            <p>5000мкд</p>
          </div>
        </div>
        <div className="single-event-banner">
          <div className="single-event-banner-link">
            <EventImagesSection link="/events" linkText="mhraconference.com" />
          </div>
          <img src="images/event-img-1.png" alt="Event Image" />
          <button onClick={handleCopyLink}>Предложи на пријател</button>
        </div>
      </div>
      <RandomEvents
        fetchUrl="http://localhost:5001/events"
        title="Слични настани"
        style={{ marginBottom: "8rem" }}
      />

      <Footer />
    </>
  );
};

export default SingleEventPage;
