import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './StudentDashboard.css';
import NavSideBar from '../../Components/NavigationBar/NavSideBar';
import CourseContent from './CourseContent'; 
import { Link } from 'react-router-dom';

export default function StudentDashboard() {
  const [sidebar, setSidebar] = useState(' ');
  const [selectedCourse, setSelectedCourse] = useState(null); 
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={`studentdashboard ${sidebar ? 'with-sidebar' : ''}`}>
      <NavSideBar sidebar={sidebar} setSidebar={setSidebar} />
      <div className='stu_dash_studentdashboard'>
        <Card className='stu_dash_dashboard-card01'>
          <Card.Body>
            <Card.Title className="stu_dash_dashboard-card-title01"> Computer Network</Card.Title>
            <Card.Text className="stu_dash_dashboard-card-text01">
              For Course Materials clicks the Go to the Module
            </Card.Text>
            <Link to="/course/computer-network" className="stu_dash_dashboard-button01">
              Go to the Module
            </Link>
          </Card.Body>
        </Card>

        {selectedCourse && <CourseContent courseTitle={selectedCourse} />}
      </div>
    </div>
  );
}
