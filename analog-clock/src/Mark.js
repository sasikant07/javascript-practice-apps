import React from 'react'

const Mark = ({ angle, type }) => {
  return (
    <div
      className={`clock-face-mark clock-face-mark-${type}`}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <div
        style={{
          width: "6px",
          height: type === "hour" ? "30px" : "10px",
          backgroundColor: type === "hour" ? "red" : "black"
        }}
      />
    </div>
  );
};

export default Mark;