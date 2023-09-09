import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LecNavSideBarData } from './LecNavSideBarData';
import './LecNavSideBar.css';
import { IconContext } from 'react-icons';

export default function LecNavSideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="lec-nav-sidebar">
          <div className="lec-nav-top">
            <Link to='#' className='lec-nav-menu-bars'>
              <FaIcons.FaBars className='lec-nav-showsidebar' onClick={showSidebar} />
            </Link>
            <Link className="lec-nav-logout-button" to="/login">Logout</Link>
          </div>
        </div>
        <nav className={sidebar ? 'lec-nav-menu active' : 'lec-nav-menu'}>
          <ul className='lec-nav-menu-items' onClick={showSidebar}>
            {LecNavSideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}><span className='lec-nav-side-bar-icons' >{item.icon}</span>
                    <span className='lec-nav-side-bar-titles'>{item.title}</span>
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