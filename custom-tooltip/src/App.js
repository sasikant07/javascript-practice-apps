import './App.css';
import Tooltip from './Tooltip';

function App() {
  return (
    <div className="App">
      <button>Alert</button>
      <Tooltip text="Pressing this button will destroy humanity">
        <i className="fa-solid fa-circle-info icon"></i>
      </Tooltip>
    </div>
  );
}

export default App;
