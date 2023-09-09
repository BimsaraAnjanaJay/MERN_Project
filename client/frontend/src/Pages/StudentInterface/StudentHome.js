import React, { useState } from 'react';
import './StudentHome.css';
import NavSideBar from '../../Components/NavigationBar/NavSideBar';

export default function StudentHome() {
  const [sidebar, setSidebar] = useState(' ');
  const showSidebar = () => setSidebar(!sidebar);

  return (
      <div className={`studenthome ${sidebar ? 'with-sidebar' : ''}`}>
          <NavSideBar sidebar={sidebar} setSidebar={setSidebar} />
          <div className={`stu_home_card-container ${sidebar ? 'with-sidebar' : ''}`}>
          </div>  
      <div className="stu_home_card-container01">
        <div className='stu_home_card-container0101'>
          <h5><center>Pahasara Higher Education Center</center></h5>
        </div>
      </div>
      <div className="stu_home_card-container02">
        <div className='stu_home_card-container0201'>
          <h5><center><span>Pahasara Higher Education Center</span><br /><br/>Welcome to the Virtual Learning Environment for the PHEC Students 2023/2024<br/>UCSC සිසුන් සඳහා වූ අතථ්‍ය ඉගෙනුම් පරිස්ථිතියට ඔබව සාදරයෙන් පිළිගනිමු!<br/><br />UCSC மாணவர்களை LMSற்கு வரவேற்கிறோம்</center></h5>
        </div>
      </div>
      <div className="stu_home_card-container03">
        <div className='stu_home_card-container0301'>
          <h5 className='stu_home_card-container0301-header' ><center>Site Announcements</center></h5>
          <h5><center>Some quick example text to build on the card title and make up thebulk of the card's content.</center></h5>
        </div>
      </div>
    </div>
  );
}
