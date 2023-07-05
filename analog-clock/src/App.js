import {useState, useEffect} from "react";
import './App.css';
import Mark from "./Mark";
import Hand from "./Hand";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderFaceMarks = () => {
    const marks = [];
    for (let i = 1; i <= 60; i++) {
      marks.push(<Mark angle={i * 6} type={i % 5 === 0 ? "hour" : "minute"} />);
    }
    return marks;
  };

  return (
    <div class="container">
      <div className="clock">
        <div className="clock-face">{renderFaceMarks()}</div>
        <Hand type="hour" angle={30 * currentTime?.getHours()} />
        <Hand type="minutes" angle={6 * currentTime?.getMinutes()} />
        <Hand type="seconds" angle={6 * currentTime?.getSeconds()} />
      </div>
    </div>
  );
}


export default App;
