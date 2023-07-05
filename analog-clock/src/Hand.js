import React from 'react'

const Hand = ({ type, angle }) => {
  return (
    <div className="clock-hand" style={{ transform: `rotate(${angle}deg)` }}>
      <div className={`clock-hand-body clock-hand-body-${type}`} />
    </div>
  );
};

export default Hand;