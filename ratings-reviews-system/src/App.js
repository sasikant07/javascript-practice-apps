import {useState} from "react";
import './App.css';
import {FaStar} from "react-icons/fa";
import { data } from "./data/data";
import Portal from "./components/Portal";

function App() {
  const [ratingsData, setRatingsData] = useState(data);
  const [showPortal, setShowPortal] = useState(false);

  const averageRatings = ratingsData.map((data) => data.ratings).reduce((curr, alt) => curr + alt, 0)/ratingsData.length;

  const toggleModal = () => {
    setShowPortal(!showPortal);
  }


  return (
    <div className="container">
      <div className="heading">
        <p>What people think about this product</p>
        <div className="average-ratings-container">
          <div className="avg-ratings">
            <h1>{averageRatings}</h1>
            <FaStar className="heading-star" size={48}/>
          </div>
          <p>Average customer ratings</p>
        </div>
      </div>
      {
        ratingsData.slice(0, 5).map((item, index) => (
          <div key={index} className="ratings-container">
            <p>{item.ratings}</p>
            <FaStar size={24} style={{color: "orange"}}/>
            <div className="progress-bar" />
            <p>10</p>
          </div>
        ))
      }
      <button type="button" className="add-review-btn" onClick={toggleModal}>Add a review</button>
      {showPortal && <Portal toggleModal={toggleModal}/>}
    </div>
  );
}

export default App;
