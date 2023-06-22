import React, { FormEvent, useState } from 'react';
import './App.css';
import useMultistepForm from './hooks/useMultistepForm';
import UserForm from './components/UserForm';
import AddressForm from './components/AddressForm';
import AccountForm from './components/AccountForm';

type FormData = {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: ""
}

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData(prev => {
      return {...prev, ...fields}
    })
  }
  const {steps, currenStepIndex, step, isFirstStep, isLastStep, back, next} = useMultistepForm([<UserForm {...data} updateFields={updateFields}/>, <AddressForm {...data} updateFields={updateFields}/>, <AccountForm {...data} updateFields={updateFields}/>]);
  

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) {
      return next();
    }

    console.log(data);
    alert("Successfull account creation!");
    setData(INITIAL_DATA);
    back();
    back();
  }

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="step-count">
            {currenStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="step">
          {!isFirstStep && <button type="button" onClick={back}>Back</button>}
          <button type="submit">
           {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
