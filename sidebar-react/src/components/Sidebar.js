import React, { useState } from 'react';
import {menuItem} from "./SidebarData";
import {NavLink} from "react-router-dom";
import Navbar from './Navbar';

const Sidebar = ({children}) => {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => setIsopen(!isOpen);

  return (
    <div className="container">
      <Navbar isOpen={isOpen} toggle={toggle}/>
      <div className='sidebar-container'>
        <div className={`sidebar ${isOpen ? "open" : "close"}`}>
            
            {
              menuItem.map((item, index) => (
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                  <div className="icon">{item.icon}</div>
                  <div className={`link_text ${isOpen ? "title-show" : "title-hide"}`}>{item.name}</div>
                </NavLink>
              ))
            }
          </div>
          <main>
            {children}
          </main>
      </div>
    </div>
  )
}

export default Sidebar;