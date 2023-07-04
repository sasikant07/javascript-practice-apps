import React, { useState } from 'react';
import "../styles/Auth.css";

const RegisterForm = () => {
    const [currIndex, setCurrIndex] = useState(0);

    const plusIndex = (n) => {
        setCurrIndex(prev => prev + n);
    }

    const handleNext = (e) => {
        e.preventDefault();
        plusIndex(1);
    }

  return (
    <div className="register">
        <strong>Sign Up</strong>
        <div className="progress-bar">
            <ul>
            <div className="progress"  style={{width: `calc(100% / 3 * ${currIndex})`}}/>
                {
                    ["Name", "Contact", "Birth", "Submit"].map((item, index) => (
                        <li ley={item} data-title={item} className={`${currIndex >= index ? "active" : ""}`}>
                            {index + 1}
                        </li>
                    ))
                }
            </ul>
        </div>

        <div className="wrapper" style={{marginLeft: `${currIndex * -100}%`}}>
            <form onSubmit={handleNext}>
                <label>First Name<span>*</span></label>
                <div className="input-group">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" required />
                </div>
                <label>Last Name<span>*</span></label>
                <div className="input-group">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" required />
                </div>

                <div className="btns">
                    <button type="submit">Next</button>
                </div>
            </form>

            <form onSubmit={handleNext}>
                <label>Email<span>*</span></label>
                <div className="input-group">
                    <i className="far fa-paper-plane"></i>
                    <input type="email" required />
                </div>
                <label>Phone Number<span>*</span></label>
                <div className="input-group">
                    <i className="fas fa-lock"></i>
                    <input type="number" required />
                </div>

                <div className="btns">
                    <button type="button" onClick={() => plusIndex(-1)}>Prev</button>
                    <button type="submit">Next</button>
                </div>
            </form>

            <form onSubmit={handleNext}>
                <label>Date<span>*</span></label>
                <div className="input-group">
                <i class="fa-solid fa-calendar-days"></i>
                    <input type="date" required />
                </div>
                <label>Gender<span>*</span></label>
                <div className="input-group">
                    <select>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="othet">Other</option>
                    </select>
                </div>

                <div className="btns">
                    <button type="button" onClick={() => plusIndex(-1)}>Prev</button>
                    <button type="submit">Next</button>
                </div>
            </form>

            <form>
                <label>User Name<span>*</span></label>
                <div className="input-group">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" required />
                </div>
                <label>Password<span>*</span></label>
                <div className="input-group">
                    <i className="fas fa-lock"></i>
                    <input type="password" required />
                </div>

                <div className="btns">
                    <button type="button" onClick={() => plusIndex(-1)}>Prev</button>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>

        
        <div className="intro-text">
            <span>Welcome to this site</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique reprehenderit iste quidem enim amet vero, corrupti voluptatem! Laborum dolores porro ducimus possimus facilis quasi, magnam, ea blanditiis, optio rem dignissimos!</p>
        </div>
    </div>
  )
}

export default RegisterForm;