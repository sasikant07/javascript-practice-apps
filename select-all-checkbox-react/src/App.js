import React, { useEffect, useState } from 'react';
import './App.css';

const userData = [
  { name: "Jeevan" },
  { name: "Manish" },
  { name: "Prince" },
  { name: "Arti" },
  { name: "rahul" }
];

function App() {
  const [selectUsers, setSelectUsers] = useState([]);

  useEffect(() => {
    setSelectUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let user = selectUsers.map((user) => {
        return { ...user, isChecked: checked };
      });
      setSelectUsers(user);
    } else {
      let user = selectUsers.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setSelectUsers(user);
    }
  };

  return (
    <div>
      <form>
        <h3>Select SelectUsers</h3>
        <div>
          <input
            type="checkbox"
            name="allSelect"
            // checked={selectUsers.filter((user) => user?.isChecked !== true).length < 1}
            checked={!selectUsers.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label>All Select</label>
        </div>
        {selectUsers.map((user, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label>{user.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default App;