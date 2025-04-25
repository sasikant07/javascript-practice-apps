import TypingEffect from "./components/TypingEffect";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Typing Effect</h2>
      <TypingEffect text="I'm a Frontend Developer." delay="100" />
    </div>
  );
}

export default App;
