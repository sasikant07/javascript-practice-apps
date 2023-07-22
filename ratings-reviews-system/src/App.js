import React, { useState } from 'react';
import "./App.css";
import Card from './components/Card';
import {data} from "./data/data";
import Portal from './components/Portal';

const App = () => {
  const [reviewsData, setReviewsData] = useState(data);
  const [showPortal, setShowPortal] = useState(false);
  const reviews = reviewsData.map((data) => data.ratings);

 const toggleModal = () => {
  setShowPortal(!showPortal);
 }

  return (
    <div className="App">
      <header className="App-main">
        <Card reviews={reviews} />
      <button className="add-review-btn" onClick={toggleModal}>Add Reviews</button>
      {showPortal && (<Portal toggleModal={toggleModal} />)}
      </header>
    </div>
  )
}

export default App;