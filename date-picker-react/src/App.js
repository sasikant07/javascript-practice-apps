import './App.css';
import DatePicker from './components/datePicker/DatePicker';

function App() {
  return (
    <div className="App">
      <DatePicker minDate={new Date()} maxDate={new Date(2099, 11, 31)}/>
    </div>
  );
}

export default App;
