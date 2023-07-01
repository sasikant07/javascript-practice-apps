import React, { FC, useState } from 'react';
import { SidebarItem } from '../../models/SidebarItem';
import { Link } from 'react-router-dom';
import "./Submenu.css";

type Props = {
    item: SidebarItem;
}

const Submenu: FC<Props> = ({item}) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => {
        setSubnav(!subnav);
        console.log("===Sub Nav====",subnav);
        
    }
  return (
    <>
        <Link to={item.path} className="sidebar-link" onClick={showSubnav}>
            <div>
                {item.icon}
                <span className="sidebarLabel">{item.title}</span>
            </div>
            <div>{item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}</div>
        </Link>
        {subnav && item?.subnav?.map((subnavItem, index) => {
            return (
                <Link to={subnavItem.path} className="dropdown-link" key={index}>
                    {subnavItem.icon}
                    <span className="sidebarLabel">{subnavItem.title}</span>
                </Link>
            )
        })}
    </>
  )
}

export default Submenu;