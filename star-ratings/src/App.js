import { useState } from "react";
import './App.css';
import { FaStar } from "react-icons/fa";

const INIT_VALUES = {
  star: 0, 
  text: ""
};

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [inputValue, setInputValue] = useState(INIT_VALUES);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const handleChange = (e) => {
    let {star, text} = inputValue;

    star = currentValue || hoverValue;
    const newValue = {star, text}
    setInputValue({...newValue, [e.target.name]: e.target.value});
  }

const handleSubmit = (e) => {
  console.log(inputValue);
  setCurrentValue(0);
  setHoverValue(undefined);
  
  setInputValue({
    star: 0,
    text: ""
  });
  if ((inputValue.star === 0 || inputValue.star === undefined) || inputValue.text === "") {
    alert("please fill the details!")
  }
}


  return (
    <div className="container">
      <h2> React Ratings </h2>
      <div className="stars">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              name="star"
              value={inputValue.star}
              onChange={handleChange}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              className={`icon ${(hoverValue || currentValue) > index ? "orange" : "grey"}`}
            />
          )
        })}
      </div>
      <textarea
        placeholder="What's your experience?"
        className="textarea"
        name="text"
        value={inputValue.text}
        onChange={handleChange}
      />

      <button className="button" onClick={() => handleSubmit()} >
        Submit
      </button>
      
    </div>
  );
};

export default App;
 