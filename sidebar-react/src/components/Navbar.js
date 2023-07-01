import React from 'react';
import {FaBars} from "react-icons/fa";
import {NavLink} from "react-router-dom";

const Navbar = ({isOpen, toggle}) => {
  return (
    <nav className="nav">
        <div className="top_section">
          <h1 className={`logo ${isOpen ? "logo-show" : "logo-hide"}`}>Logo</h1>
          <div className={`bars ${isOpen ? "bars-expand" : "bars-small"}`}>
            <FaBars onClick={toggle} />
          </div>
          {!isOpen && <h1 className="brand">Logo</h1>}
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar