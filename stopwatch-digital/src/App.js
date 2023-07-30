import {useRef, useState} from "react";
import './App.css';

function App() {
  const [time, setTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
      setTime(Date.now());
    }, 10);
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
  }

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setNow(0);
    setTime(0);
  }

  let timePassed = (time - now) / 1000;

  return (
    <div className="App">
      <h1>Design Stopwatch in React</h1>
      <h2>Stopwatch: {timePassed.toFixed(3)}</h2>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
