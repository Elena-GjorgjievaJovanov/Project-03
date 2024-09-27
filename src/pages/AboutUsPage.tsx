import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/AboutUsPage.css";
import Carousel from "../components/Carousel/Carousel";
import CompanyMembersSection from "../components/About-Us/CompanyMembersSection";

interface CompanyMember {
  id: string;
  image: string;
  name: string;
  companyPosition: string;
}

const AboutUsPage: React.FC = () => {
  const [events, setEvents] = useState<CompanyMember[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/company-members")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <Header />
      <Hero
        title="Запознај го тимот"
        subtitle="Македонска Асоцијација за Човечки Ресурси"
        image1="images/au-img1.png"
        image2="images/au-img2.png"
        joinText="Придружи ни се:"
        buttonSignIn="Прочитај повеќе"
        buttonSignInLink="/experts"
        socialLinks={{
          linkedin: "https://www.linkedin.com",
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          youtube: "https://www.youtube.com",
        }}
      />
      <Carousel />
      <div className="about-us-homepage">
        <div className="about-us-links">
          <a href="/">
            <p className="about-us-hp">Почетна </p>
          </a>
          <p className="about-us-sign">&gt;</p>
          <p className="about-u-conference">Годишна конференција</p>
        </div>
        <div className="about-us-homepage-inner">
          <div className="about-us-homepage-left">
            <div className="about-us-homepage-left-inner">
              <img src="/images/auh-img1.png" alt="About Us Image 1" />
              <div className="about-us-homepage-left-inner-inner">
                <p className="about-us-title">МИСИЈА И ВИЗИЈА</p>
                <h1>Македонска Асоцијација за Човечки Ресурси</h1>
                <p>
                  МАЧР е стручно, невладино, непартиско и непрофитно здружение
                  на граѓани формирано на 22 април 2009 година, заради вршење на
                  дејности и активности поврзани со развојот на работната сила,
                  промоција на управувањето со човечките ресурси, како и
                  унапредување на професијата управување со човечки ресурси.{" "}
                  <br />
                  <br />
                  <span>Мисија:</span> “Мисија на МАЧР е унапредување и развој
                  на професијата менаџмент со човечките ресурси”.
                  <br />
                  <span>Визија:</span> “Визија на МАЧР е развој на луѓето и
                  организациите!”
                </p>
              </div>
            </div>
            <div className="about-us-homepage-right-inner">
              <div className="about-us-homepage-right-inner-inner">
                <h1>Цели и задачи:</h1>
                <p>
                  <span>ПОДДРШКА</span> на највисоките идеали во областа на
                  управувањето со човечки ресурси и посестрано прифаќање и
                  ценење на професијата;
                  <br />
                  <span>ПРИЗНАВАЊЕ</span> на управувањето со човечки ресурси
                  поради неговиот придонес за успешно работење и зајакнување на
                  способноста и кредибилитетот на професијата управување со
                  човечки ресурси;
                  <br />
                  <span>СТРЕМЕЖ</span> да бидеме водачи во развојот и
                  промовирањето на добрите практики во професијата управување со
                  човечки ресурси, што ќе ги применуваат и професионалните
                  членови и нивните колеги и да ги поставиме основните
                  национални стандарди за управување со човечки ресурси;
                  Лобирање кај владата и поднесување на документи во име на
                  членовите и трети лица.
                </p>
              </div>
              <img src="/images/auh-img2.png" alt="About Us Image 2" />
            </div>
          </div>
        </div>
        <div className="about-us-president-section">
          <img src="/images/big-event-home-img1.png" alt="President Image" />
          <div className="about-us-president-section-inner">
            <h1>Претседател на МАЧР</h1>
            <p className="president-name">м-р Дарко Петровски</p>
            <p>
              Дарко е еден од основачите на МАЧР, каде придонесуваше како член
              на УО, претседател на Надзорниот одбор, генерален секретар и
              уредник на електронскиот весник на МАЧР, а на последното Собрание
              во декември 2018 беше избран за Претседател на Македонската
              асоцијација за човечки ресурси. Дарко помина речиси 9 годишен
              работен ангажман како раководител на одделот за човечки ресурси и
              организација во ЕВН, еден од најголемите работодавачи во
              Македонија. Пред тоа, тој беше на чело на Канцеларијата за
              економски прашања при Австриската амбасада во Скопје.
            </p>{" "}
            <p>
              Дарко е основач на Талент бизнис инкубаторот Степ-ап кој нуди
              програми за стипендирање и развој на таленти, за практикантска
              работа и консултантски услуги во областа на стратегиски деловен
              развој, организациски развој и менаџмент со човечките ресурси. Тој
              е и ко-основач и партнер во Динамик Консалтинг и е вклучен во
              проекти како менаџмент консултант во различни области.
            </p>{" "}
            <p>
              Покрај професионалниот ангажман, Дарко бил и е сеуште активен во
              повеќе организации како Организацијата на работодавачи на
              Македонија, Националниот економско-социјален совет, Локалниот
              економско-социјален совет на град Скопје, Техничкиот комитет за
              менаџмент со човечките ресурси (ТК42) при Институтот за
              стандардизација на РМ, Националниот совет за претприемништво и
              конкурентност, советодавните одбори на Универзитетот за туризам и
              менаџмент во Скопје и на Универзитетот Американ Колеџ Скопје.{" "}
            </p>
            <p>
              Дарко магистрираше економски науки на Економскиот факултет во
              Љубљана и е магистер по бизнис администрација и организациски
              науки, со специјализација во менаџментот со човечките ресурси, а
              исто така е дипломиран машински инженер и автор на повеќе стручни
              и научно-истражувачки трудови.
            </p>
          </div>
        </div>
        <div className="company-members">
          <div className="company-memebers-dots-div1"></div>
          <div className="company-memebers-dots-div2"></div>
          <div className="company-memebers-dots-div3"></div>
          <div className="company-memebers-dots-div4"></div>
          <h1>ОДБОР НА МАЧР</h1>
          <CompanyMembersSection members={events} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUsPage;
