import React, {useState, useEffect, useRef} from 'react'

const Timer = ({expiresIn, onComplete}) => {
    const [time, settime] = useState(expiresIn);
    const [pause, setPause] = useState(false);
    const timerRef= useRef(null);

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            settime((prevTime) => prevTime - 1000);
        }, 1000);

        if (time <= 0) {
            clearTimeout(timerRef.current);
            onComplete();
            setPause(true);
        }

        return () => {
            clearTimeout(timerRef.current);
        }
    }, [time, onComplete])

    const stopTimer = () => {
        clearTimeout(timerRef.current);
        setPause(true);
    }

    const startTimer = () => {
        if (time > 0) {
            settime((time) => time - 1000);
            setPause(false);
        }
    }

    const getFormattedText = (time) => {
        const SECONDS = 1000;
        const MINUTES = 60 * SECONDS;
        const HOURS = 60 * MINUTES;
        const DAYS = 24 * HOURS;


        const days = Math.floor(time / DAYS);
        const hours = Math.floor((time % DAYS) / HOURS);
        const minutes = Math.floor((time % HOURS) / MINUTES);
        const seconds = Math.floor((time % MINUTES) / SECONDS);

        return (
            <div className="countdown-timer">
                {days < 10 ? `0${days}` : days} : {hours < 10 ? `0${hours}` : hours} : {" "}
                {minutes < 10 ? `0${minutes}` : minutes} : {" "}
                {seconds < 10 ? `0${seconds}` : seconds}
            </div>
        )
    }


  return (
    <>
        {getFormattedText(time)}
        <div>
            <button onClick={pause ? startTimer : stopTimer}>
                {!pause ? "Stop" : "Start"} Timer
            </button>
        </div>
    </>
  )
}

export default Timer;