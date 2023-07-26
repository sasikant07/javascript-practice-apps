import './App.css';
import Carousel from './components/Carousel';
import people from "./data";

function App() {
  return (
    <div className="App">
      <h1>Carousel</h1>
      <Carousel data={people} />
    </div>
  );
}

export default App;
