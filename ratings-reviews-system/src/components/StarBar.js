import React from 'react';
import Star from "../assets/Star.js";

const StarBar = ({points}) => {

    const renderStars = (count, colorFill) => {
        let stars = [];

        for (let i = count; i > 0; i--) {
            stars.push(<Star key={"start-" + count} colorFill={colorFill} />);
            // stars.push(<i className={`fa-solid fa-star icon-fill`}></i>);
        }

        return stars;
    }

  return (
    <div className="StarBar">
        <div className="StarBar-bg">{renderStars(5, "#cbd4e8")}</div>
        <div className="StarBar-filled">{renderStars(points, "#ffcc48")}</div>
    </div>
  )
}

export default StarBar;