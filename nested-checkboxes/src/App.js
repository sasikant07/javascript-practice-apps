import React, { useState } from "react";
import Checkboxes from "./components/Checkboxes";
import "./App.css";
import { checkboxesData } from "./data";

function App() {
  const [checked, setChecked] = useState({});

  return (
    <div className="App">
      <Checkboxes
        data={checkboxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}

export default App;
