import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const AddLecturer = (props) => {

  const navigate = useNavigate();
  const [lecturer, setLecturer] = useState({
    name: '',
    userId: '',
    email: '',
    password: '',
    userRole: ''
  });

  const onChange = (e) => {
    setLecturer({ ...lecturer, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/lecturer', lecturer)
      .then((res) => {
        setLecturer({
          name: '',
          userId: '',
          email: '',
          password: '',
          userRole: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in AddLecturer!');
      });
  };

  return (
    <div className='addlecturer'>
      <div className='add-lec-container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/showlecturer' className='btn btn-outline-warning float-left'>
              Show Lecturers List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Lecturer</h1>
            <p className='lead text-center'>Create new Lecturer</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='Name of the Lecturer'
                  name='name'
                  className='form-control'
                  value={lecturer.name}
                  onChange={onChange}
                />
              </div>

              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='Index Number'
                  name='userId'
                  className='form-control'
                  value={lecturer.userId}
                  onChange={onChange}
                />
              </div>

              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='E-mail'
                  name='email'
                  className='form-control'
                  value={lecturer.email}
                  onChange={onChange}
                />
              </div>

              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='Phone Number'
                  name='password'
                  className='form-control'
                  value={lecturer.password}
                  onChange={onChange}
                />
              </div>
              <div className='admin-form-group'>
                {/* <input
                  type='date'
                  placehold               na               className='form-control'
                  value={lectu               onChange={onChange}
                /> */}
              </div>
              <br />
              <div className='add-lec-submit-button text-center'>
                {/* Wrap the button in a centered container */}
                <div className='d-flex justify-content-center'>
                  <Link to='/showlecturer' className='btn btn-outline-warning'>
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

export default AddLecturer;