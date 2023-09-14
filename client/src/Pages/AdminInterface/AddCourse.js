import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Add.css';

import { useNavigate } from 'react-router-dom';

const AddCourse = (props) => {

  const navigate = useNavigate();
  const [course, setCourse] = useState({
    title: '',
    courseId: '',
    teacher: '',
    description: '',
    students: '',
    submissionLinks: '',
  });

  const onChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/course', course)
      .then((res) => {
        setCourse({
          title: '',
          courseId: '',
          teacher: '',
          description: '',
          students: '',
          submissionLinks: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in AddCourse!');
      });
  };

  return (
    <div className='addcourse'>
      <div className='add-cou-container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/showcourse' className='btn btn-outline-warning float-left'>
              Show Courses List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Course</h1>
            <p className='lead text-center'>Create new course</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='Name of the course'
                  name='title'
                  className='form-control'
                  value={course.title}
                  onChange={onChange}
                />
              </div>

              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='Course Id'
                  name='courseId'
                  className='form-control'
                  value={course.courseId}
                  onChange={onChange}
                />
              </div>

              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='Lecturer'
                  name='teacher'
                  className='form-control'
                  value={course.teacher}
                  onChange={onChange}
                />
              </div> 

              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='Description'
                  name='description'
                  className='form-control'
                  value={course.description}
                  onChange={onChange}
                />
              </div>
              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='students'
                  name='students'
                  className='form-control'
                  value={course.students}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='submissionLinks'
                  name='submissionLinks'
                  className='form-control'
                  value={course.submissionLinks}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='add-cou-submit-button text-center'>
                 {/* Wrap the button in a centered container  */}
                <div className='d-flex justify-content-center'>
                  <Link to='/showcourse' className='btn btn-outline-warning'>
                    Submit
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;