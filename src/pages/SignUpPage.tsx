import React from "react";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/signUpPage.css";

const SignUpPage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero
        title="Придружи ни се!"
        subtitle="Сакаш да се информираш подетално за бенефитите?"
        image1="images/signup-img1.png"
        image2="images/signup-img2.png"
        buttonSignIn="Прочитај повеќе"
        buttonSignInLink="/membership"
        removeJoinUsBg={true}
        socialLinks={{
          linkedin: "https://www.linkedin.com",
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          youtube: "https://www.youtube.com",
        }}
        style={{ height: "60vh" }}
      />
      <div className="sign-up-page">
        <div className="sign-up-page-inner">
          <h1>
            <strong>Најави се</strong> или <strong>Регистрирај се</strong>
          </h1>
          <a href="/">
            <button className="btn-google">
              <img src="/images/google.png" alt="" />
              Продолжи со Google
            </button>
          </a>
          <div>
            <div className="line-elements">
              <div className="line"></div>
              <div className="line-text">Или</div>
              <div className="line"></div>
            </div>
            <div className="email-elements">
              <label htmlFor="email">e-маил</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="mhra@primer.com"
              />
            </div>
            <button className="btn-continue-email">
              Продолжи со овој email
            </button>
            <p className="email-rules">
              Со кликнување на 'Продолжи со Google/Email', се согласувате со
              нашите <span>Услови на користење</span> и{" "}
              <span>Политика за приватност</span>
            </p>
            <div className="checkbox">
              <input type="checkbox" id="membership" />
              <label htmlFor="membership">Сакам да станам член на МАЧР</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="email_updates" />
              <label htmlFor="email_updates">
                Сакам редовно да добивам информации на е-маил
              </label>
            </div>
          </div>
        </div>
        <div className="sign-un-page-benefits">
          <div className="dots-div1"></div>
          <div className="dots-div2"></div>
          <div className="dots-div3"></div>
          <div className="dots-div4"></div>
          <div className="sign-un-page-benefits-inner">
            <div className="sign-un-page-benefits-row1">
              <img src="/images/supb-img1.png" alt="Sign Up Page Image" />
              <div className="sign-un-page-benefits-row1-info">
                <h1>Бенефити од индивидуално зачленување</h1>
                <ul>
                  <li>Едукативни настани</li>
                  <li>Најнови информации и случувања</li>
                  <li>Ширење на мрежата на контакти</li>
                  <li>Вклучување во работењето на МАЧР</li>
                  <li>HR огласи за работа</li>
                </ul>
              </div>
            </div>
            <div className="sign-un-page-benefits-row2">
              <div className="sign-un-page-benefits-row2-info">
                <h1>Бенефити од корпоративно зачленување</h1>
                <ul>
                  <li>Претставник во корпоративниот одбор на МАЧР</li>
                  <li>Можности за промоција на вашата компанија</li>
                  <li>Ширење на мрежата регионално и интернационално</li>
                  <li>Попусти на HR настани, обуки, конференции и сл.</li>
                  <li>HR огласи за работа</li>
                </ul>
              </div>
              <img src="/images/supb-img2.png" alt="Sign Up Page Image" />
            </div>
          </div>
          <div className="dots-div5"></div>
          <div className="dots-div6"></div>
          <div className="dots-div7"></div>
          <div className="dots-div8"></div>
          <div className="dots-div9"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpPage;
