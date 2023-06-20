import React from "react";

const BtnComponent = ({ start, status, stop, resume, reset }) => {
  return (
    <div>
      {status === 0 ? (
        <button className="stopwatch-btn stopwatch-btn-gre" onClick={start}>
          Start
        </button>
      ) : (
        ""
      )}

      {status === 1 ? (
        <>
          <button className="stopwatch-btn stopwatch-btn-red" onClick={stop}>
            Stop
          </button>
          <button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>
            Reset
          </button>
        </>
      ) : (
        ""
      )}

      {status === 2 ? (
        <>
          <button className="stopwatch-btn stopwatch-btn-gre" onClick={resume}>
            Resume
          </button>
          <button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>
            Reset
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default BtnComponent;
