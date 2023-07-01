import React, { FC, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import "./Sidebar.css";

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log("===Sidebar====",sidebar);
  }
  return (
    <IconContext.Provider value={{color: "#fff"}}>
      <div className="header">
      <div className="nav">
        <Link to="#" className={`navIcon`} onClick={showSidebar}>
          <AiOutlineMenu />
        </Link>
      </div>
      <div className={`sidebarNav ${sidebar ? "no-left" : "left"}`}>
        <div>
          <Link to="#" className={`navIcon`} onClick={showSidebar}>
            <AiOutlineClose />
          </Link>
          {
            SidebarData.map((item, index) => {
              return <Submenu item={item} key={index} />;
            })
          }
        </div>
      </div>
      </div>
    </IconContext.Provider>
  )
}

export default Sidebar;