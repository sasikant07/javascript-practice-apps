import React from 'react';

const Portal = ({toggleModal}) => {
  return (
    <div className="portalWrapper">
      <div className="overlay" onClick={toggleModal}></div>
        <h2>What is your experience about this product?</h2>
        <button type="button" onClick={toggleModal}>close</button>
    </div>
  )
}

export default Portal;