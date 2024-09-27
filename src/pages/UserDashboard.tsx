import React, { useState, useRef, useEffect } from "react";
import "../styles/SingleEventPage.css";
import Header from "../components/Header/Header";
import Carousel from "../components/Carousel/Carousel";
import "../styles/UserDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import CalendarSection from "../components/Calendar/CalendarSection";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleMonthChange = (newMonth: Date) => {
    setCurrentMonth(newMonth);
  };

  const [userInfo, setUserInfo] = useState({
    firstName: "Валентина",
    lastName: "Стојанова",
    email: "vstojanova@hotmail.com",
    password: "",
    profession: "HR Регрутер",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to handle form data temporarily
  const [formData, setFormData] = useState(userInfo);

  const handleSettingsClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserInfo(formData);
    setFormData((prev) => ({ ...prev, password: "" }));
    closeModal();
  };

  return (
    <>
      <Header />
      <div className="user-dashboard-page">
        <div className="user-dashboard-page-section1">
          <div className="user-dashboard-page-section1-left">
            <img src="images/Foto.png" alt="Profile Image" />
            <p className="user-name">{`${
              userInfo.firstName
            } ${userInfo.lastName.charAt(0)}.`}</p>
            <p className="user-location">Битола</p>
            <p className="message-notification">
              <FontAwesomeIcon icon={faComments} />
            </p>
            <div className="message-dot"></div>

            <hr />
            <div className="user-other-info">
              <p>
                <FontAwesomeIcon icon={faUser} />
              </p>
              <p>{userInfo.profession}</p>
            </div>
            <div
              className="user-other-info"
              onClick={handleFileClick}
              style={{ cursor: "pointer" }}
            >
              <p>
                <FontAwesomeIcon icon={faPaperclip} />
              </p>
              <p>CV</p>
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
            <hr />
            <div className="user-other-info">
              <p>
                <FontAwesomeIcon icon={faMobileScreenButton} size="lg" />
              </p>
              <p>+389 70 481 440</p>
            </div>
            <div className="user-other-info">
              <p>
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </p>
              <p>{userInfo.email}</p>
            </div>
            <div
              className="user-other-info-2"
              onClick={handleSettingsClick}
              style={{ cursor: "pointer" }}
            >
              <p>
                <FontAwesomeIcon icon={faGear} size="lg" />
              </p>
              <p>Поставки</p>
            </div>

            {isModalOpen && (
              <div className="modal">
                <div className="modal-content">
                  <div className="modal-content-row-1">
                    <h2>Поставки</h2>
                    <span className="close-button" onClick={closeModal}>
                      &times;
                    </span>
                  </div>

                  <form className="settings-form" onSubmit={handleSave}>
                    <div className="modal-content-row-2">
                      <div className="form-group">
                        <label>Име</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Презиме</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="modal-content-row-3">
                      <div className="modal-content-row-3-left">
                        <div className="form-group">
                          <label>E-mail</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Лозинка</label>
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Промени Лозинка"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Професија</label>
                          <select
                            name="profession"
                            value={formData.profession}
                            onChange={handleInputChange}
                          >
                            <option value="HR Регрутер">HR Регрутер</option>
                            <option value="Регрутер">Регрутер</option>
                          </select>
                        </div>
                      </div>
                      <div className="modal-content-row-3-right">
                        <div className="form-group">
                          <p className="notification-label">
                            Добивај нотификации на:
                          </p>
                          <div className="modal-content-row-3-right-checkbox-row">
                            <input
                              type="checkbox"
                              id="platform"
                              name="platform"
                            />
                            <label htmlFor="platform">Платформа</label>
                          </div>
                          <div className="modal-content-row-3-right-checkbox-row">
                            <input type="checkbox" id="email" name="email" />
                            <label htmlFor="email">E-mail</label>
                          </div>
                          <div className="modal-content-row-3-right-checkbox-row">
                            <input type="checkbox" id="social" name="social" />
                            <label htmlFor="social">Социјални медиуми</label>
                          </div>
                        </div>

                        <div className="form-group">
                          <p className="notification-label">
                            Добивај нотификации за:
                          </p>
                          <div className="modal-content-row-3-right-checkbox-row">
                            <input
                              type="checkbox"
                              id="new-content"
                              name="new-content"
                            />
                            <label htmlFor="new-content">Нови содржини</label>
                          </div>
                          <div className="modal-content-row-3-right-checkbox-row">
                            <input
                              type="checkbox"
                              id="new-events"
                              name="new-events"
                            />
                            <label htmlFor="new-events">Нови настани</label>
                          </div>
                          <div className="modal-content-row-3-right-checkbox-row">
                            <input
                              type="checkbox"
                              id="upcoming-events"
                              name="upcoming-events"
                            />
                            <label htmlFor="upcoming-events">
                              Приближување на датум за настан
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="save-button">
                      Зачувај
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div className="user-dashboard-page-section1-right">
            <h1>Кратка биографија</h1>
            <p className="user-dashboard-page-section1-right-main-p">
              Јас сум Валентина Стојанова, искусен HR регрутер со над 10 години
              работно искуство во полето на човечките ресурси. Својата кариера
              ја започнав како помлад HR асистент и со текот на годините
              напредував, стекнувајќи богато знаење и вештини во регрутирањето и
              управувањето со таленти. Позната сум по мојот професионализам,
              одлична комуникација и способност да пронајдам и привлечам врвни
              таленти за различни индустрии. Работев со големи компании,
              помагајќи им да изградат силни и ефикасни тимови. Со посветеност
              кон мојата професија и постојана желба за усовршување, се стремам
              да бидам лидер и ментор во областа на HR.
            </p>
            <h1>Препораки</h1>
            <div className="other-users">
              <div className="other-user-info">
                <img src="images/img25.jfif" alt="Image" />
                <div className="other-user-info-text">
                  <p>Фрањо</p>
                  <span>Пред 9 минути</span>
                </div>
              </div>
              <p>
                Со задоволство ја препорачувам Валентина како извонреден HR
                регрутер. Нејзината способност да идентификува и привлече врвни
                таленти е ненадмината.
              </p>
            </div>
            <div className="other-users">
              <div className="other-user-info">
                <img src="images/img26.jfif" alt="Image" />
                <div className="other-user-info-text">
                  <p>Бобан</p>
                  <span>Пред 9 минути</span>
                </div>
              </div>
              <p>
                Валентина е извонреден HR професионалец кој постојано покажува
                посветеност и страст кон својата работа. Со нејзината способност
                да препознае и регрутира талентирани индивидуи, таа ни помогна
                да изградиме силни и успешни тимови.
              </p>
            </div>
            <span>Види ги сите</span>
          </div>
        </div>
        <Carousel />
        <div className="user-dashboard-page-section2">
          <div className="user-dashboard-page-section2-left">
            <div className="user-dashboard-page-section2-left-1">
              <p>Поени до следна рамка</p>
              <div className="points-sec">
                <div className="points-sec-inner">
                  <img
                    className="img1"
                    src="images/Ellipse-91.png"
                    alt="Image"
                  />
                  <img
                    className="img2"
                    src="images/Ellipse-92.png"
                    alt="Image"
                  />
                  <img
                    className="img3"
                    src="images/Rectangle-6492.png"
                    alt="Image"
                  />
                  <p>50</p>
                </div>
                <div className="points-sec-inner2">
                  <img
                    className="img1"
                    src="images/Ellipse-91.png"
                    alt="Image"
                  />
                  <img
                    className="img2"
                    src="images/Ellipse1150.png"
                    alt="Image"
                  />
                  <img
                    className="img3"
                    src="images/Rectangle-6493.png"
                    alt="Image"
                  />
                  <p>50</p>
                </div>
                <div className="points-sec-inner3">
                  <img
                    className="img1"
                    src="images/Ellipse-91.png"
                    alt="Image"
                  />
                  <img
                    className="img2"
                    src="images/Ellipse-151.png"
                    alt="Image"
                  />
                  <img
                    className="img3"
                    src="images/Rectangle-6494.png"
                    alt="Image"
                  />
                  <p>50</p>
                </div>
              </div>
            </div>
            <div className="user-dashboard-page-section2-left-2">
              <div className="user-dashboard-page-section2-left-2-row1">
                <p>Најнови беџови</p>
                <span>Види ги сите</span>
              </div>
              <div className="user-dashboard-page-section2-left-2-row2">
                <div className="user-dashboard-page-section2-left-2-row2-left">
                  <p>
                    <FontAwesomeIcon icon={faComment} size="lg" />
                  </p>
                </div>
                <p>
                  <span>Левел 2</span> беџ за активност во <span>блог</span>{" "}
                  секцијата за корисници
                </p>
              </div>
              <div className="user-dashboard-page-section2-left-2-row3">
                <div className="user-dashboard-page-section2-left-2-row3-left">
                  <p>
                    <FontAwesomeIcon icon={faCalendar} size="lg" />
                  </p>
                </div>
                <p>
                  <span>Левел 2</span> беџ за активност во <span>блог</span>{" "}
                  секцијата за корисници
                </p>
              </div>
            </div>
            <div className="user-dashboard-page-section2-left-3">
              <h1>Листа на конекции</h1>
              <div className="user-dashboard-page-section2-left-3-row1">
                <p>Додади конекција</p>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Пребарај"
                />
              </div>
              <div className="user-dashboard-page-section2-left-3-row2">
                <p>Последно додадени</p>
                <span>Види ги сите</span>
              </div>
              <div className="user-dashboard-page-section2-left-3-users">
                <div className="user-dashboard-page-section2-left-3-user">
                  <img src="images/Imagem-1.png" alt="User Image" />
                  <p>Јована Б.</p>
                </div>
                <div className="user-dashboard-page-section2-left-3-user">
                  <img src="images/Imagem-2.png" alt="User Image" />
                  <p>Влатко М.</p>
                </div>
                <div className="user-dashboard-page-section2-left-3-user">
                  <img src="images/Imagem-3.png" alt="User Image" />
                  <p>Борче К.</p>
                </div>
              </div>
              <div className="user-dashboard-page-section2-left-3-users">
                <div className="user-dashboard-page-section2-left-3-user">
                  <img src="images/Imagem-4.png" alt="User Image" />
                  <p>Јована Б.</p>
                </div>
                <div className="user-dashboard-page-section2-left-3-user">
                  <img src="images/Imagem-5.png" alt="User Image" />
                  <p>Влатко М.</p>
                </div>
                <div className="user-dashboard-page-section2-left-3-user">
                  <img src="images/Imagem-6.png" alt="User Image" />
                  <p>Борче К.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="user-dashboard-page-section-right">
            <h1>Купени карти</h1>

            <div className="user-dashboard-page-section-right-row1">
              <div className="user-dashboard-page-section-right-row1-overlay-img">
                <img className="img1" src="images/carousel5.png" alt="Image" />
                <img
                  className="img2"
                  src="images/ion_ticket-outline.png"
                  alt="Image"
                />
              </div>
              <div className="right-info">
                <Link to="/events">
                  <p>
                    <span>HR кафе:</span> Пoтребата од зајакнување на соработ...
                  </p>{" "}
                </Link>
                <span>25.07.2024 Лабораториум, Скопје</span>
              </div>
            </div>

            <div className="user-dashboard-page-section-right-row1">
              <div className="user-dashboard-page-section-right-row1-overlay-img">
                <img className="img1" src="images/carousel5.png" alt="Image" />
                <img
                  className="img2"
                  src="images/ion_ticket-outline.png"
                  alt="Image"
                />
              </div>
              <div className="right-info">
                <Link to="/events">
                  {" "}
                  <p>
                    <span>13та меѓународна МАЧР конференција</span>
                  </p>
                </Link>
                <span>24-25.12.2024 Хотел Континентал, Скопје</span>
              </div>
            </div>

            <div className="user-dashboard-page-section-right-row2">
              <div className="user-dashboard-page-section-right-row2-part1">
                <p>Освоено:</p>
                <h1>20%</h1>
                <p>попуст за следна карта</p>
              </div>
              <div className="user-dashboard-page-section-right-row2-part2">
                <p>Освоено:</p>
                <h1>20%</h1>
                <p>попуст за следна карта</p>
              </div>
            </div>
            <div className="user-dashboard-page-section-right-row3">
              <textarea
                name="textarea"
                id="textarea"
                placeholder="Остави фидбек за нешто што би можеле да подобриме на страната. Кажи ни што ти смета и ние ке се потрудиме да го подобриме."
              ></textarea>
              <div className="attach-icon" onClick={handleIconClick}>
                <FontAwesomeIcon icon={faPaperclip} />
              </div>
              <button type="submit">Испрати</button>
              <input
                type="file"
                ref={fileInputRef}
                className="file-input"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <CalendarSection
          currentMonth={currentMonth}
          events={events}
          handleMonthChange={handleMonthChange}
          style={{
            paddingLeft: "8rem",
            paddingRight: "8rem",
            marginBottom: "16rem",
          }}
        />
      </div>
    </>
  );
};

export default UserDashboard;
