import './App.css';
import {useState} from "react";
import usePasswordGenerator from './hooks/usePasswordGenerator';
import StrengthChecker from './components/StrengthChecker';
import Button from './components/Button';
import Checkbox from './components/Checkbox';

const INIT_DATA = [
  {title: "Include Uppercase Letters", state: false},
  {title: "Include Lowercase Letters", state: false},
  {title: "Include Numbers", state: false},
  {title: "Include Symbols", state: false},
]

function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState(INIT_DATA);

  const {password, errorMessage, generatePassword} = usePasswordGenerator();
  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i) => {
    const updateCheckboxData = [...checkboxData];
    checkboxData[i].state = !checkboxData[i].state;
    setCheckboxData(updateCheckboxData);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <div className="container">
      {/* Password Text and Copy button */}
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <Button text={copied ? "copied" : "copy"} customClass="copyBtn" onClick={handleCopy} />
        </div>
      )}


      {/* Character Length */}
      <div className="charlength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input type="range" min="4" max="20" value={length} onChange={(e) => setLength(e.target.value)}/>
      </div>


      {/* Checkboxes */}
        <div className="checkboxes">
          {checkboxData.map((checkbox, index) => {
            return <Checkbox key={index} title={checkbox.title} state={checkbox.state} onChange={() => handleCheckboxChange(index)} />
            
          })}
        </div>


      {/* Strength */}
      <StrengthChecker password={password}/>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}


      {/* Generate Button */}
      <Button text="Generate Password" customClass="generateBtn" onClick={() => generatePassword(checkboxData, length)} />
    </div>
  );
}

export default App;
