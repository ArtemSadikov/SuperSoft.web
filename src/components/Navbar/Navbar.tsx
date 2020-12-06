import {Link} from 'react-router-dom';
import React from 'react';
import {SideBarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';

const IconContextValue: IconContext = {
  color: "#000"
}

export const NavBar = () => {
  return (
    <IconContext.Provider value={IconContextValue}>
      <nav className="nav-menu">
        <ul className="nav-menu-items">
          <li className="navbar-title">
            <Link to="#"
                  className="title">
              Task<br/>Manager
            </Link>
          </li>
          {SideBarData.map((item, index) => (
            <li key={index}
                className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>
  );
};
