import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [bars, setBars] = useState([]);
  const progressingIds = useRef(new Set());

  const startNextBar = () => {
    setBars((prevBars) => {
      const activeBars = prevBars.filter(
        (bar) => progressingIds.current.has(bar.id)
      ).length;

      if (activeBars >= 3) return prevBars;

      const nextBarIndex = prevBars.findIndex(
        (bar) => bar.progress === 0 && !progressingIds.current.has(bar.id)
      );

      if (nextBarIndex === -1) return prevBars;

      const barToStart = prevBars[nextBarIndex];
      progressingIds.current.add(barToStart.id);

      const interval = setInterval(() => {
        setBars((currentBars) => {
          return currentBars.map((bar) => {
            if (bar.id === barToStart.id) {
              const newProgress = bar.progress + 1;
              if (newProgress >= 100) {
                clearInterval(interval);
                progressingIds.current.delete(bar.id);
                startNextBar();
              }
              return {
                ...bar,
                progress: Math.min(100, newProgress),
              };
            }
            return bar;
          });
        });
      }, 50);

      return prevBars;
    });
  };

  const handleClick = () => {
    const newBar = { id: Date.now() + Math.random(), progress: 0 };
    setBars((prevBars) => [...prevBars, newBar]);
  };

  useEffect(() => {
    startNextBar();
  }, [bars.length]);

  const handleReset = () => {
    setBars([]);
    progressingIds.current.clear();
  };

  return (
    <div className="container">
      <div className="controls">
        <button className="click-button" onClick={handleClick}>
          Click Me
        </button>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
        <span className="limit-text">Limit - 3</span>
      </div>
      <div className="progress-container">
        {bars.map((bar) => (
          <div key={bar.id} className="progress-wrapper">
            <div
              className="progress-bar"
              style={{ width: `${bar.progress}%` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
