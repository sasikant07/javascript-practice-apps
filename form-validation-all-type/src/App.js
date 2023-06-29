import { useState } from 'react';
import './App.css';

const INIT_DATA = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  occupation: "",
  gender: "",
  skills: []
}

function App() {

  const [formData, setFormData] = useState(INIT_DATA);
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    if(e.target.name === 'skills') {
      let copy = {...formData};

      if (e.target.checked) {
        copy.skills.push(e.target.value);
      } else {
        copy.skills = copy.skills.filter(el => el !== e.target.value);
      }

      setFormData(copy);
    } else {
      setFormData(() => ({...formData, [e.target.name]: e.target.value}));
    }
  }

  const validateForm = () => {

    let errors = {};
    const regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/i;
    if (formData.username === "") {
      errors.username = "Username is Required!";
    }

    if (formData.email === "") {
      errors.email = "Email is required";
    } else if (!regex.test(formData.email)) {
      errors.email = "This is not a valid email format!"
    }

    if (formData.password === "") {
      errors.password = "Password is required";
    } else if (!pattern.test(formData.password)) {
      errors.password = "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!";
    }

    if (formData.confirmPassword === "") {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.password.length !== formData.confirmPassword.length) {
      errors.confirmPassword = "Password doesn't match!";
    }

    if (formData.occupation === "") {
      errors.occupation = "Occupation is Required!";
    }

    if (formData.gender === "") {
      errors.gender = "Gender is Required!";
    }

    if (formData.skills === "") {
      errors.skills = "Skills is Required!";
    }

    return errors;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormError(validateForm());
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">User Name</label>
          <input className="form-control" type="text" name="username" onChange={handleChange} value={formData.username}/>
          <span className="non-valid">{formError.username}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" name="email" onChange={handleChange} value={formData.email} />
          <span className="non-valid">{formError.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" onChange={handleChange} value={formData.password} />
          <span className="non-valid">{formError.password}</span>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} />
          <span className="non-valid">{formError.confirmPassword}</span>
        </div>
        <div className="form-group">
          <label htmlFor="occupation" className="form-label">Occupation</label>
          <select className="form-select" name="occupation" onChange={handleChange} value={formData.occupation}>
            <option value=""></option>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="other">Other</option>
          </select>
          <span className="non-valid">{formError.occupation}</span>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender</label>
          <div>
            <input type="radio" name="gender" value="male" onChange={handleChange} checked={formData.gender === "male"} />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" name="gender"  value="female" onChange={handleChange} checked={formData.gender === "female"} />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input type="radio" name="gender"  value="other" onChange={handleChange} checked={formData.gender === "other"} />
            <label htmlFor="other">Other</label>
          </div>
          <span className="non-valid">{formError.gender}</span>
        </div>
        <div className="form-group">
          <label htmlFor="Skills" className="form-label">Skills</label>
          <div>
            <input type="checkbox" name="skills" value="html" onChange={handleChange} checked={formData.skills.indexOf("html") !== -1} />
            <label htmlFor="html">HTML</label>
          </div>
          <div>
            <input type="checkbox" name="skills" value="css" onChange={handleChange} checked={formData.skills.indexOf("css") !== -1} />
            <label htmlFor="css">CSS</label>
          </div>
          <div>
            <input type="checkbox" name="skills" value="javascript" onChange={handleChange} checked={formData.skills.indexOf("javascript") !== -1} />
            <label htmlFor="javascript">JavScript</label>
          </div>
          <span className="non-valid">{formError.skills}</span>
        </div>
        <div className="form-group">
          <button type="submit" className="btn">Submit</button> 
        </div>
      </form>
    </div>
  );
}

export default App;
