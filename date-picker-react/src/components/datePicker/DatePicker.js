import React, { useState } from 'react';
import "./DatePicker.css";
import { monthNames } from '../../consts/consts';
import { getNumberofDaysInMonth, getSortedDays, range } from '../../utils/utils';

const DatePicker = ({minDate, maxDate}) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const [selectedDate, setSelectedDate] = useState(null);

    const nextMonth = () => {
        if (currentMonth < 11) {
            setCurrentMonth(prev => prev + 1);
        } else {
            setCurrentMonth(0);
            setCurrentYear(prev => prev + 1);
        }
    }

    const prevMonth = () => {
        if (currentMonth > 0) {
            setCurrentMonth(prev => prev - 1);
        } else {
            setCurrentMonth(11);
            setCurrentYear(prev => prev - 1);
        }
    }

    const handleSelection = (e) => {
        // event delegation
        if (e.target.id === "day") {
            setSelectedDate(
                new Date(currentYear, currentMonth, e.target.getAttribute("data-day"))
            )
        }
    }

    const getTimeFromState = (_day) => {
        return new Date(currentYear, currentMonth, _day);
    }

  return (
    <div className="pickerWrapper">
        <div className="header">
            <button onClick={prevMonth} disabled={minDate?.getTime() > getTimeFromState(1)}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
                <p>{monthNames[currentMonth]} {currentYear}</p>
            <button onClick={nextMonth} disabled={maxDate?.getTime() < getTimeFromState(getNumberofDaysInMonth(currentYear, currentMonth))}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
        </div>
        <div className="datepicker-body">
            <div className="sevenColGrid heading">
                {getSortedDays(currentYear, currentMonth).map((day) => <p>{day}</p>)}
            </div>
            <div className="sevenColGrid" onClick={handleSelection} >
                {range(1, getNumberofDaysInMonth(currentYear, currentMonth) + 1).map((day) => (
                    <button 
                        id="day" 
                        data-day={day}
                        disabled={
                            minDate?.getTime() > getTimeFromState(day) || maxDate?.getTime() < getTimeFromState(day)
                        }
                        className={selectedDate?.getTime() === new Date(currentYear, currentMonth, day).getTime() 
                            ? "active" : ""}>
                            {day}
                    </button>
                ))}
            </div>
        </div>
    </div>
  )
}

export default DatePicker;