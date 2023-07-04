import React from 'react'
import IMG from "../images/email.svg";
import "../styles/Home.css";

const Home = ({isAuth, setIsAuth}) => {
  return (
    <div id="Home" className={`${isAuth.open ? "active" : ""}`}>
        <div className="container">
            <div className="img">
                <img src={IMG} alt="IMG" />
            </div>
            <div className="text-btns">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias veniam modi dicta assumenda autem perferendis illum temporibus, asperiores nemo deleniti blanditiis tenetur pariatur voluptas quasi consectetur reiciendis quis eveniet?</p>
                <div className="btns">
                    <a href="#!" className="login-btn" onClick={() => setIsAuth({open: true, form: "login"})}>
                        Login
                    </a>
                    <a href="#!" className="register-btn" onClick={() => setIsAuth({open: true, form: "register"})}>
                        Register
                    </a>
                </div>
                <span>Or Via Social Media</span>
                <div className="via-social">
                    <a href="#!">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#!">
                        <i className="fa-brands fa-google"></i>
                    </a>
                    <a href="#!">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;