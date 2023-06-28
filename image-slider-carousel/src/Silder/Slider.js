import React, { useState } from 'react';
import "./Slider.css";

const Slider = ({config}) => {
    const [imageIndex, setImageIndex] = useState(0);

    const next = () => {
        setImageIndex(state => state += 1);

        if (imageIndex === config.length - 1) {
            setImageIndex(0);
        }
    }

    const prev = () => {
        setImageIndex(state => state -= 1);

        if (imageIndex === 0) {
            setImageIndex(config.length - 1);
        }
    }

  return (
    <div className="container">
        <div className="imageContainer">
            <img src={config[imageIndex].image} alt="" />
        </div>
        <div className="title">
            {config[imageIndex].title}
        </div>
        <div onClick={next} className={`navButton right`}>
            <i className={`fas fa-arrow-circle-right navButton`}></i>
        </div>
        <div onClick={prev} className={`navButton left`}>
            <i className={`fas fa-arrow-circle-left navButton`}></i>
        </div>
        <div className="dotContainer">
            {
                config.map((dot, index) => (
                    <div key={dot.image} className={`dot ${index === imageIndex ? "active" : ""}`}></div>
                ))
            }
        </div>
    </div>
  )
}

export default Slider;