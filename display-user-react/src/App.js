import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Kyle", age: 27 },
    { id: 2, name: "Sally", age: 32 },
    { id: 3, name: "Mike", age: 54 },
    { id: 4, name: "Jim", age: 24 },
    { id: 5, name: "Nick", age: 38 },
  ]);

  const [selectedUserId, setSelectedUserId] = useState();
  const selectedUser = useMemo(() =>
    users.find(user => user.id === selectedUserId), [users, selectedUserId]);

  const incrementAge = (id) => {
    setUsers(currUsers => {
      return currUsers.map(user => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 }
        } else {
          return user;
        }
      })
    })
  }

  const selectUser = (id) => {
    setSelectedUserId(id);
  }

  return (
    <>
      <h3>
        Selected User: {" "}
        {selectedUser == null
          ? "None"
          : `${selectedUser.name} is ${selectedUser.age} years old`
        }
      </h3>
      {users.map(user => (
        <div
          key={user.id}
          style={{
            display: 'grid',
            gridTemplateColumns: "1fr auto auto",
            gap: ".25 rem",
            marginBottom: ".5rem"
          }}
        >
          {user.name} is {user.age} years old
          <button onClick={() => incrementAge(user.id)}>Increment</button>
          <button onClick={() => selectUser(user.id)}>Select</button>
        </div>
      ))
      }
    </>
  );
}

export default App;
