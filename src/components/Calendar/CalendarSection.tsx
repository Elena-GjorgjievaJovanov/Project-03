import React, { useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
  getDay,
} from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import "./Calendar.css";

interface Event {
  id: string;
  date: string;
  title2: string;
  time: string;
  purposeDescription: string;
}

interface CalendarSectionProps {
  currentMonth: Date;
  events: Event[];
  handleMonthChange: (newMonth: Date) => void;
  style?: React.CSSProperties;
}

const monthNamesMacedonian = [
  "Јануари",
  "Февруари",
  "Март",
  "Април",
  "Мај",
  "Јуни",
  "Јули",
  "Август",
  "Септември",
  "Октомври",
  "Ноември",
  "Декември",
];

const getMonthNameInMacedonian = (date: Date) => {
  const monthIndex = date.getMonth();
  return monthNamesMacedonian[monthIndex];
};

const CalendarSection: React.FC<CalendarSectionProps> = ({
  currentMonth,
  events,
  handleMonthChange,
  style,
}) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handlePrevMonth = () => {
    handleMonthChange(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    handleMonthChange(addMonths(currentMonth, 1));
  };

  const start = startOfMonth(currentMonth);
  const end = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start, end });

  const getEventDays = () => {
    return new Set(
      events.map((event) => format(new Date(event.date), "yyyy-MM-dd"))
    );
  };

  const eventDays = getEventDays();

  const getMondayBasedDayIndex = (dayIndex: number) => (dayIndex + 6) % 7;
  const startDay = getMondayBasedDayIndex(getDay(start));
  const calendarDays = Array(startDay).fill(null).concat(days);

  const weekdayNames = ["Пон", "Вто", "Сре", "Чет", "Пет", "Саб", "Нед"];

  const handleDayClick = (day: Date) => {
    const dayFormatted = format(day, "yyyy-MM-dd");
    const event = events.find(
      (event) => format(new Date(event.date), "yyyy-MM-dd") === dayFormatted
    );
    if (event) {
      setSelectedEvent(event);
    }
  };

  return (
    <div className="events-page-calendar-section-inner" style={style}>
      <div className="events-page-calendar-section-left">
        <h1>Календар со датуми за сите претстојни настани</h1>
        <p>
          Погледни ги сите настани распоредени на календар. Со клик на
          обележаните настани можеш да дознаеш повеќе информации за секој од
          настаните, но за целосни информации упатете се до индивидуалната
          страна на настанот.
        </p>
      </div>

      <div className="events-page-calendar-section-right">
        <div className="calendar-page-left">
          <div
            className={`calendar-page-left-inner ${
              selectedEvent ? "visible" : "hidden"
            }`}
          >
            {selectedEvent ? (
              <>
                <img src="/images/logo.png" alt="Logo Image" />
                <p className="company-name">МАЧР</p>
                <p className="event-title2">{selectedEvent.title2}</p>
                <div className="calendar-page-left-icon-div">
                  <p className="icon">
                    <FontAwesomeIcon icon={faClock} />
                  </p>
                  <p className="event-time">{selectedEvent.time}</p>
                </div>
                <p className="event-description">
                  {selectedEvent.purposeDescription}
                </p>
                <a href={`/events/${selectedEvent.id}`}>
                  <p>Прочитај повеќе</p>
                </a>
              </>
            ) : null}
          </div>
        </div>

        <div className="calendar-page-right">
          <h1>Избери Дата</h1>

          <div className="calendar-header">
            <button onClick={handlePrevMonth}>&lt;</button>
            <div className="month-name">
              {getMonthNameInMacedonian(currentMonth)}{" "}
              {currentMonth.getFullYear()}
            </div>
            <button onClick={handleNextMonth}>&gt;</button>
          </div>

          <div className="weekdays">
            {weekdayNames.map((day, index) => (
              <div key={index} className="weekday">
                {day}
              </div>
            ))}
          </div>

          <div className="calendar-grid">
            {calendarDays.map((day, index) => {
              if (day) {
                const dayFormatted = format(day, "yyyy-MM-dd");
                const hasEvent = eventDays.has(dayFormatted);
                const isCurrentDay = isToday(day);

                return (
                  <div
                    key={dayFormatted}
                    className={`calendar-day ${hasEvent ? "event-day" : ""} ${
                      isCurrentDay ? "today" : ""
                    }`}
                    onClick={() => handleDayClick(day)}
                  >
                    {format(day, "d")}
                    {hasEvent && <span className="event-dot"></span>}{" "}
                  </div>
                );
              } else {
                return <div key={index} className="calendar-day empty"></div>;
              }
            })}
          </div>

          {selectedEvent && (
            <button
              className="buy-card-calendar"
              onClick={() =>
                (window.location.href = `/events/${selectedEvent.id}`)
              }
            >
              Купи Карта
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;
