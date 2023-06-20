import React, {useState} from "react";
import BtnComponent from './Components/BtnComponent';
import DispalyComponent from './Components/DispalyComponent';
import './App.css';

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [delay, setDelay] = useState();
  const [status, setStatus] = useState(0);

  let updatedMs = time.ms;
  let updatedS = time.s;
  let updatedM = time.m;
  let updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }

    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }

    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }

    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  }

  const start = () => {
    run();
    setStatus(1);
    setDelay(setInterval(run, 10));
  }
  
  const stop = () => {
    clearInterval(delay);
    setStatus(2);
  }

  const resume = () => start();

  const reset = () => {
    clearInterval(delay);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0});
  }

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DispalyComponent time={time} />
          <BtnComponent status={status} start={start} stop={stop} resume={resume} reset={reset} />
        </div>
      </div>
    </div>
  );
}

export default App;
