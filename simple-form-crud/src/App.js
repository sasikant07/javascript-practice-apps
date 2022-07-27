import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './componenets/List';

function App() {
  const [name, setName] = useState("")
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newItem = [...name];
    setList([...list, newItem])
    setName("");
  }

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleDelete = (id) => {
    setList(list.filter((item) => item !== id));
  }


  return (
    <>
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Type here..." />
        <button type='submit'>Submit</button>
      </form>
    </div>
    <div>
      <List list={list} handleDelete={handleDelete} />
    </div>
    </>
  );
}

export default App;
