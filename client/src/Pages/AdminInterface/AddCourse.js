import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Add.css';

import { useNavigate } from 'react-router-dom';

const AddCourse = (props) => {

  const navigate = useNavigate();
  const [course, setCourse] = useState({
    title: '',
    isbn: '',
    author: '',
    description: '',
    published_date: '',
    publisher: '',
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
          isbn: '',
          author: '',
          description: '',
          published_date: '',
          publisher: '',
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
                  placeholder='Course Number'
                  name='isbn'
                  className='form-control'
                  value={course.isbn}
                  onChange={onChange}
                />
              </div>

              {/* <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='E-mail'
                  name='author'
                  className='form-control'
                  value={course.author}
                  onChange={onChange}
                />
              </div> */}

              {/* <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='Phone Number'
                  name='description'
                  className='form-control'
                  value={course.description}
                  onChange={onChange}
                />
              </div> */}
              {/* <div className='admin-form-group'>
                <input
                  type='date'
                  placeholder='published_date'
                  name='published_date'
                  className='form-control'
                  value={course.published_date}
                  onChange={onChange}
                />
              </div> */}
              <br />
              <div className='add-cou-submit-button text-center'>
                {/* Wrap the button in a centered container */}
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