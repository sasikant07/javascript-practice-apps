import React from 'react';
import "../styles/Auth.css";

const LoginForm = () => {
  return (
    <div className="login">
        <strong>Sign In</strong>

        <form>
            <label>Email<span>*</span></label>
            <div className="input-group">
                <i className="far fa-paper-plane"></i>
                <input type="email" required />
            </div>
            <label>Password<span>*</span></label>
            <div className="input-group">
                <i className="fas fa-lock"></i>
                <input type="password" required />
            </div>

            <div className="btns">
                <button type="submit">Login</button>
            </div>

            <a href="#!" className="forget">Forgot Your Password?</a>
        </form>
        <div className="intro-text">
            <span>Welcome to this site</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique reprehenderit iste quidem enim amet vero, corrupti voluptatem! Laborum dolores porro ducimus possimus facilis quasi, magnam, ea blanditiis, optio rem dignissimos!</p>
        </div>
    </div>
  )
}

export default LoginForm;