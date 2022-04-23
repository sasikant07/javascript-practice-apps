import React, { } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Alert from "./Alert";
import List from "./List";

const getLocalStorage = () => {
  let list = localStorage.getItem('list');

  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, 'danger', 'Please enter value');
    } else if (name && isEditing) {
      setList(list.map(item => {
        if (item.id === editID) {
          return ({...item, title: name})
        }

        return item;
      }))

      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'Item value changed');

    } else {
      const newItems = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItems]);

      setName('');

      showAlert(true, 'success', 'Item added to the list');

    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  }

  const clearItems = () => {
    setList([]);
    showAlert(true, 'danger', 'Empty list');
  }

  const removeItem = (id) => {
    setList(list.filter(item => item.id !== id));
    showAlert(true, 'danger', 'item removed from list');
  }

  const editItem = (id) => {
    const specificItem = list.find(item => item.id === id);
     setEditID(id);
     setIsEditing(true);
     setName(specificItem.title);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <article className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearItems}>clear items</button>
        </div>
      )}
    </article>
  );
}

export default App;
