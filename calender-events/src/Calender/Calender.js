import React, { useRef, useState } from 'react';
import "./Calender.css";
import { DAYS, MONTHS } from '../consts';
import { areDatesTheSame, getDateObj, getRandomDarkColor, getSortedDays } from '../utils';

const Calender = ({startingDate, eventsArr, addEvent, onDragEvents, setEvents}) => {
    const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
    const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());
    const [showPortal, setShowPortal] = useState(false);
    const [portalData, setPortalData] = useState({});

    const prevMonth = () => {
        if (currentMonth > 0) {
            setCurrentMonth(prev => prev - 1);
        } else {
            setCurrentMonth(11);
            setCurrentYear(prev => prev - 1)
        }
    }

    const nextMonth = () => {
        if (currentMonth < 11) {
            setCurrentMonth(prev => prev + 1);
        } else {
            setCurrentMonth(0);
            setCurrentYear(prev => prev + 1)
        }
    }

    const onAddEvent = (date, e) => {
        if (e.currentTarget === e.target) {
            addEvent(date, getRandomDarkColor());
        }
    }

    // Drag drop events
    const draggedElDateRef = useRef();
    const draggedElIdRef = useRef();

    const onDragStart = (id) => {
        draggedElIdRef.current = id;
    }

    const onDragEnter = (e, date) => {
        e.preventDefault();
        draggedElDateRef.current = date;
    }

    const onDragEnd = (e) => {
        e.preventDefault();
        const updatedEvents = eventsArr.map((events) => {
            if (events.id === draggedElIdRef.current) {
                events.date = draggedElDateRef.current;
            }
            return events;
        })
        onDragEvents(updatedEvents);
    }

    const handleClickEvent = (events) => {
        setShowPortal(true);
        setPortalData(events);
    }

    const handlePortalCose = () => {
        setShowPortal(false);
    }

    const handleDelete = () => {
        setEvents(prevEvents => prevEvents.filter((events) => events.title !== portalData.title));
        setShowPortal(false);
    }

  return (
    <div className="wrapper">
        <div className="calenderHead">
            <ion-icon onClick={prevMonth} name="arrow-back-circle-outline"></ion-icon>
            <p>{MONTHS[currentMonth]} {currentYear}</p>
            <ion-icon onClick={nextMonth} name="arrow-forward-circle-outline"></ion-icon>
        </div>
        <div className="sevenColGrid">
            {DAYS.map((day) => (
                <div className="dayHead" key={day}>{day}</div>
            ))}
        </div>
        <div className={`calenderBody ${currentMonth === 1 ? "fourCol" : "fiveCol"}`} >
            {getSortedDays(currentMonth, currentYear).map((day) => (
            <div 
                onClick={(e) => onAddEvent(getDateObj(day, currentMonth, currentYear), e)}
                onDragEnter={(e) => onDragEnter(e, getDateObj(day, currentMonth, currentYear))}
                onDragEnd={onDragEnd}
                onDragOver={(e) => e.preventDefault()}
                id={`${currentYear}/${currentMonth}/${day === undefined ? Math.random() : day}`}
                key={`${currentYear}/${currentMonth}/${day === undefined ? Math.random() : day}`}
                className={`styledDay ${areDatesTheSame(new Date(), getDateObj(day, currentMonth, currentYear)) ? "active" : ""}`}>
                    <p>{day}</p>

                    {eventsArr.map((events) => (
                        areDatesTheSame(getDateObj(day, currentMonth, currentYear), events.date) &&
                        <div 
                            key={events.title}
                            onDragStart={() => onDragStart(events.id)}
                            onClick={() => handleClickEvent(events)}
                            draggable
                            className={`styledEvent`} 
                            style={{backgroundColor: `${events?.color ? events?.color : "darkBlue"}`}}>
                                {events.title}
                        </div>
                    ))}
            </div>
            ))} 
        </div>

        {showPortal && <Portal {...portalData} handleDelete={handleDelete} handlePortalCose={handlePortalCose} />}
    </div>
  )
}

export default Calender;

const Portal = ({title, date, handleDelete, handlePortalCose}) => {
    return (
        <div className="portalWrapper">
            <h2>{title}</h2>
            <p>{date.toDateString()}</p>
            <ion-icon onClick={handleDelete} name="trash-outline"></ion-icon>
            <ion-icon onClick={handlePortalCose} name="close-outline"></ion-icon>
        </div>
    )
}

const EventWrapper = ({ children }) => {
    if (children.filter((child) => child).length)
      return (
        <>
          {children}
          {children.filter((child) => child).length > 2 && (
            <div
                className='seeMore'
              onClick={(e) => {
                e.stopPropagation();
                console.log("clicked see more");
              }}
            >
              see more...
            </div>
          )}
        </>
      );
  };