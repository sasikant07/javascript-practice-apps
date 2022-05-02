import './App.css';

function App() {

  const myDebounce = (cb, delay) => {
    let timer;

    return function (...args) {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    }
  }

  const handleChange = myDebounce(e => {
    console.log(e.target.value);
  }, 500);

  // without debounce
  // const handleChange = (e) => {
  //   console.log(e.target.value)
  // }

  return (
    <div className="App">
      <input type='text' onChange={handleChange} />
    </div>
  );
}

export default App;
