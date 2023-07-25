import React, {useEffect, useState} from "react";
import { addDateBy, areDatesSame, getMonday, range } from "../utils/utils";
import { DAYS, dummyEvents } from "../constants/consts";
import Modal from "./Modal ";


const HOUR_HEIGHT = 30;
const HOUR_MARGIN_TOP = 15;
let eventDate;
const WeeklyCalender = () => {
    const [mondayDate, setMondayDate] = useState(getMonday());
    const [events, setEvents] = useState(dummyEvents);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({});

    const hourNow = new Date().getHours();
    const minutesNow = new Date().getMinutes();

    const nextWeek = () => {
        setMondayDate(addDateBy(mondayDate, 7));
    }

    const prevWeek = () => {
        setMondayDate(addDateBy(mondayDate, -7));
    }

    const onAddEvent = (date) => {
        const text = prompt("text");
        const from = prompt("from");
        const to = prompt("to");
        
        // setShowModal(true);
        // const {text, from , to} = formData;
        eventDate = date;
        date.setHours(from);

        setEvents((prev) => [...prev, {text, date, howLong: parseInt(to - from)}]);
    }

    // const hourLine = hourNow * HOUR_HEIGHT + HOUR_MARGIN_TOP + HOUR_HEIGHT / 2 + minutesNow / 2;
    const hourLine = hourNow * HOUR_HEIGHT + HOUR_MARGIN_TOP / 8 + minutesNow / 2;
    const eventHours = (HOUR_HEIGHT + HOUR_HEIGHT) / 2;

    useEffect(() => {
    }, [showModal])

  return (
    <>
      <div className="container">
        <button onClick={prevWeek}>
            <i className="fa-solid fa-angle-left"></i>
        </button>

        <p className="today-text">Today: {new Date().toDateString()}</p>
        <p>From: {mondayDate?.toDateString()}</p>
        <p>To: {addDateBy(mondayDate, 6).toDateString()}</p>

        <div className="event-plus">
            Event <i className="fa-solid fa-plus"></i>
        </div>

        <button onClick={nextWeek}>
            <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <div className="wrapper">
        <div className="wrapper-grid">
            <div className="vgrid">
                {range(24).map((hour) => (
                    <div key={hour}>{hour}</div>
                ))}
            </div>
            <div className="hgrid">
                {DAYS.map((day, index) => (
                    <>
                        <div 
                            key={index} 
                            className="day-wrapper"
                            style={{background: areDatesSame(new Date(), addDateBy(mondayDate, index)) ? "#F2CEE6" : ""}}
                            onClick={() => onAddEvent(addDateBy(mondayDate, index))}
                        >
                            <p>{day}</p>
                            {events.map((event) => areDatesSame(addDateBy(mondayDate, index), event.date) && (
                                <div 
                                    key={event.howLong}
                                    className="event" 
                                    style={{height: `${event.howLong * HOUR_HEIGHT}px`, top: `${event.date.getHours() * eventHours + event.date.getMinutes() / 2}px`}}
                                >
                                    {event.text}
                                </div>
                            ))}
                        </div>
                        {/* {showModal && <Modal setShowModal={setShowModal} setFormData={setFormData} date={eventDate.toDateString()} />} */}
                    </>
                ))}
            </div>
        </div>
        {!showModal && <div className="hour-line" style={{top: hourLine}}></div>}
      </div>
    </>
  );
};

export default WeeklyCalender;
