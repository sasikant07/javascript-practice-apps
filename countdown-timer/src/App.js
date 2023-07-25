import './App.css';
import Timer from './components/Timer';

function App() {
  
  const onComplete = () => {
    console.log("Completed");
  };

  return (
    <div className="App">
      <h1>Countdown</h1>
      <Timer expiresIn="10000" onComplete={onComplete} />
    </div>
  );
}

export default App;
