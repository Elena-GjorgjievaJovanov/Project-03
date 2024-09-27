import React, { useState, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import "./Header.css";

const Header: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearchDropdown = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      const newUrl = `/search?q=${encodeURIComponent(query)}`;
      window.history.pushState({}, "", newUrl);
    } else {
      window.history.pushState({}, "", "/");
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="images/logo.png" alt="Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li className="dropdown">
            <a>Информативни Содржини</a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/about-us">За нас</Link>
              </li>
              <li>
                <Link to="/membership">Членство</Link>
              </li>
              <li>
                <Link to="/coaching">Огранок на коучинг</Link>
              </li>
              <li>
                <Link to="/galleries">Галерии</Link>
              </li>
              <li>
                <Link to="/jobs">Огласи за работа</Link>
              </li>
              <li>
                <Link to="/awards">HR награди</Link>
              </li>
              <li>
                <Link to="/newsletter">Е-весник</Link>
              </li>
              <li>
                <Link to="/archive">Архива</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a>Едукативни Содржини</a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/articles">Статии</Link>
              </li>
              <li>
                <Link to="/research">Истражувања</Link>
              </li>
              <li>
                <Link to="/interviews">Интервјуа</Link>
              </li>
              <li>
                <Link to="/trainings">Обуки</Link>
              </li>
              <li>
                <Link to="/academies">Македонски академии</Link>
              </li>
              <li>
                <Link to="/projects">Проекти</Link>
              </li>
              <li>
                <Link to="/experts">Експерти</Link>
              </li>
              <li>
                <Link to="/trends">Трендови</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/conference">Годишна Конференција</Link>
          </li>
          <li className="dropdown">
            <Link to="/events">Настани</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/events/hr-cafe">HR caffee</Link>
              </li>
              <li>
                <Link to="/events/hr-weekend">HR weekend</Link>
              </li>
              <li>
                <Link to="/events/hr-webinar">HR webinar</Link>
              </li>
              <li>
                <Link to="/events/hr-conferences">HR conferences</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/blog">Блог</Link>
          </li>
          <li>
            <Link to="/profile">Мој Профил</Link>
          </li>

          <li>
            <div className="search-icon" onClick={toggleSearchDropdown}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            {showSearch && (
              <div className="search-dropdown">
                <input
                  type="text"
                  placeholder="Пребарувај..."
                  className="search-input"
                  value={searchQuery}
                  onChange={handleSearchInput}
                />
              </div>
            )}
          </li>
        </ul>
        <div className="nav-right-icons">
          <p>
            <FontAwesomeIcon icon={faBell} />
          </p>
          <p>МК / ЕN</p>
          <Link to="/sign-up">
            <button className="btn-navbar">ЗАЧЛЕНИ СЕ</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
