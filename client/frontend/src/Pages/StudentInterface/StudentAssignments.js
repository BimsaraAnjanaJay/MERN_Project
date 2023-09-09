import React, { useState } from 'react';
import './StudentAssignments.css';
import NavSideBar from '../../Components/NavigationBar/NavSideBar';

export default function StudentAssignments() {
  const [sidebar, setSidebar] = useState(' ');
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={`studentassignments ${sidebar ? 'with-sidebar' : ''}`}>
      <NavSideBar sidebar={sidebar} setSidebar={setSidebar} />
      <h2><center>assignments</center></h2>
    </div>
  )
}