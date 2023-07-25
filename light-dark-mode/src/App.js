import './App.css';
import useTheme from './hooks/useTheme';

function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className="App">
      <div role="button" className="toggle-button" onClick={toggleTheme}>
        {theme === "light-theme" ? <i className="fa-regular fa-moon"></i> : <i className="fa-regular fa-sun"></i>}
      </div>
      <div>
      <h2>{theme}</h2>
      <h1>Dark Mode and Light Mode in React Js</h1>
      </div>
    </div>
  );
}

export default App;
