import React, { useState, useEffect } from 'react';
import './Show.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StudentCard from './StudentCard';

function ShowStudent() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/student')
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowStudent');
      });
  }, []);

  const studentList =
  student.length === 0  ? 'there is no student record!'
      : student.map((student, k) => <StudentCard student={student} key={k} />);

  return (
    <div className='showstudent'>
      <div className='show-stu-container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Students List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/addstudent' className='btn btn-outline-warning float-right'>
              + Add New Student
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{studentList}</div>
      </div>
    </div>
  );
}

export default ShowStudent;
