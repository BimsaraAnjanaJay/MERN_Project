import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavSideBarData } from './NavSideBarData';
import './NavSideBar.css';
import { IconContext } from 'react-icons';

export default function NavSideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="nav-sidebar">
          <div className="nav-top">
            <Link to='#' className='nav-menu-bars'>
              <FaIcons.FaBars className='nav-showsidebar' onClick={showSidebar} />
            </Link>
            <Link className="nav-logout-button" to="/login">Logout</Link>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            {NavSideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>{item.icon}
                  <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}