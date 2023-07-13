import React, {useState} from "react";
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(10);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <input type="range" value={inputValue} onChange={handleChange} />
      <div className="pieChart" style={{backgroundImage: `conic-gradient(green ${inputValue}%, lightgreen 0)`}}></div>
    </div>
  );
}

export default App;
