import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import BlogHome from "../components/Blog/Blog-Home";
import BenefitsHome from "../components/Benefits/Benefits-Home";
import RandomEvents from "../components/Actual-Events/RandomEvents";
import BigEventHome from "../components/Big-Event/Big-Event-hero";
import PopularResearchesHome from "../components/PopularResearches/Popular-Researcher-Home";
import AboutUsHome from "../components/About-Us/About-Us-Home";
import Footer from "../components/Footer/Footer";
import SubscribePopup from "../components/SubscribePopup/SubscribePopup";
import "../styles/Homepage.css";

const HomePage: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const handleScroll = () => {
    sectionRefs.current.forEach((section) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        const middleOfScreen = window.innerHeight / 2;

        if (rect.top < middleOfScreen) {
          section.classList.add("active");
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isPopupVisible && <SubscribePopup onClose={closePopup} />}
      <Header />
      <Hero
        title="Луѓето пред се!"
        subtitle="Македонска Асоцијација за Човечки Ресурси"
        image1="images/hero1.png"
        image2="images/hero2.png"
        joinText="Придружи ни се:"
        buttonSignIn="Зачлени се"
        buttonSignInLink="/sign-up"
        socialLinks={{
          linkedin: "https://www.linkedin.com",
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          youtube: "https://www.youtube.com",
        }}
      />
      <Carousel />
      <section ref={(el) => (sectionRefs.current[1] = el)} className="fade-up">
        <BlogHome />
      </section>
      <section ref={(el) => (sectionRefs.current[2] = el)} className="fade-up">
        <BenefitsHome />
      </section>
      <section ref={(el) => (sectionRefs.current[3] = el)} className="fade-up">
        <RandomEvents
          fetchUrl="http://localhost:5001/events"
          title="Актуелни настани"
        />
      </section>
      <section ref={(el) => (sectionRefs.current[4] = el)} className="fade-up">
        <BigEventHome />
      </section>
      <section ref={(el) => (sectionRefs.current[5] = el)} className="fade-up">
        <PopularResearchesHome />
      </section>
      <section ref={(el) => (sectionRefs.current[6] = el)} className="fade-up">
        <AboutUsHome />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
