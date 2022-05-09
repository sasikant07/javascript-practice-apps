import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

const initialValues = {
  username: "",
  email: "",
  password: ""
}

function App() {

const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate());
  setIsSubmit(true);
}

const validate = () => {
  const {username, email, password} = formValues;
  const errors = {}
  const regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

  if (!username) {
    errors.username = "Username is required";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!regex.test(email)) {
    errors.email = "This is not a valid email format!"
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 4) {
    errors.password = "Password must be more than 4 characters"
  } else if (password.length > 20) {
    errors.password = "Password must eb less than 20 characters"
  }

  return errors;
}

const handleChange = (e) => {
  const {name, value} = e.target;
  setFormValues({...formValues, [name]: value});
}

  return (
    <div className="App">
      {Object.keys(formErrors).length === 0 && isSubmit && <h4>Login Successfull</h4>}
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
          <div>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div >
            <label>Email: </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button>Submit</button>
      </form>
      </div>
  );
}

export default App;
