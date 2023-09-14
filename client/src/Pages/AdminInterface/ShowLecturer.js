import React, { useState, useEffect } from 'react';
import './Show.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LecturerCard from './LecturerCard';

function ShowLecturer() {
  const [lecturer, setLecturer] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/lecturer')
      .then((res) => {
        setLecturer(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowLecturer');
      });
  }, []);

  const lecturerList =
  lecturer.length === 0  ? 'there is no lecturer record!'
      : lecturer.map((lecturer, k) => <LecturerCard lecturer={lecturer} key={k} />);

  return (
    <div className='showlecturer'>
      <div className='show-lec-container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Lecturers List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/addlecturer' className='btn btn-outline-warning float-right'>
              + Add New Lecturer
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{lecturerList}</div>
      </div>
    </div>
  );
}

export default ShowLecturer;
