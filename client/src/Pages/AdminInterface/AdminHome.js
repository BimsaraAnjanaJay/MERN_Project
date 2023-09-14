import React, { useState, useEffect } from 'react';
import './AdminHome.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminHome() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/student')
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowStudentList');
      });
  }, []);


  return (
    <div className='adminhome'>
      <div className='admin-home-container'>
          <div className='admin-home-topic'>
            <h2><center>ADMIN DASHBOARD</center></h2>
          </div>

        <div className='lista'>
            <div class="split left">
            <div class="centered">
                <h2>Students</h2>
                <p>Create Read<br />Update Delete<br />Students</p>
                <Link to='/showstudent' className='admin-home-crud-button'>
                CRUD  Students
                </Link>
            </div>
            </div>

            <div class="split center">
            <div class="centered">
                <h2>Lecturers</h2>
                <p>Create Read<br />Update Delete<br />Lecturer</p>
                <Link to='/addlecturers'className='admin-home-crud-button'>
                CRUD Lecturer
                </Link>
            </div>
            </div>

            <div class="split right">
            <div class="centered">
              <h2 style={{padding: '0px 0px 0px 5px'}}>Courses</h2>
                <p>Create Read<br />Update Delete<br />Courses</p>
                <Link to='/addcourses' className='admin-home-crud-button'>
                CRUD Courses
                </Link>
            </div>
            </div>            
        </div>
      </div>
    </div>
  );
}

export default AdminHome;