import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
        <div className="navbar">
            <Link to="/" className="brand">
                Site Name
            </Link>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;