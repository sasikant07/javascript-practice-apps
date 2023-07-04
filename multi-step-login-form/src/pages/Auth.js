import React from 'react';
import "../styles/Auth.css";
import LoginForm from '../components/LoginForm';
import RegisterForm from "../components/RegisterForm";

const Auth = ({isAuth, setIsAuth}) => {
  return (
    <div id="Auth" className={`${isAuth.open ? "show" : ""}`}>
        <a href="#!" className="close" onClick={() => setIsAuth({...isAuth, open: false})}>
            <i className="fas fa-times"></i>
        </a>
        <div className="content">
          {isAuth.form === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
    </div>
  )
}

export default Auth;