import React, { useState, useEffect } from 'react';
import './Show.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

function ShowCourse() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/course')
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowCourse');
      });
  }, []);

  const courseList =
  course.length === 0  ? 'there is no course record!'
      : course.map((course, k) => <CourseCard course={course} key={k} />);

  return (
    <div className='showcourse'>
      <div className='show-cou-container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Courses List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/addcourse' className='btn btn-outline-warning float-right'>
              + Add New Course
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{courseList}</div>
      </div>
    </div>
  );
}

export default ShowCourse;
