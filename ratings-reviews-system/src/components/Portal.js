import React from 'react';

const Portal = ({toggleModal}) => {
  return (
    <div className="portalWrapper">
      <div className="overlay" onClick={toggleModal}></div>
        <h4>What is your experience about this product?</h4>
        <button className="close-modal" onClick={toggleModal}>X</button>
    </div>
  )
}

export default Portal;