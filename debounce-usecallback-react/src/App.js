import React, { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState([]);

  const debounce = (fn, delay) => {
    let timer;

    return function (...args) {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        fn(...args);
      }, delay)
    }
  }

  const handleChange = (e) => {
    let { value } = e.target;

    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then(res => res.json())
      .then(json => setSearch(json.data.items.name))
      .catch(error => console.log(error));
  }

  const optimisedSearch = useCallback(debounce(handleChange, 500), []);

  return (
    <div className="App">
      <input
        type='text'
        name='search'
        placeholder='Enter Something...'
        className='search'
        onChange={optimisedSearch} />
      {search?.length > 0 &&
        <div className='autoComplete'>
          {search?.map((el, index) => {
            <div key={index} classname='autoCompleteItems'>
              <span>{el.name}</span>
            </div>
          })}
        </div>
      }
    </div>
  );
}

export default App;
