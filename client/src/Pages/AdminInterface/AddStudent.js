import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AddStudent.css';

import { useNavigate } from 'react-router-dom';

const AddStudent = (props) => {

  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: '',
    userId: '',
    email: '',
    password: '',
    userRole: '',
  });

  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/student', student)
      .then((res) => {
        setStudent({
          name: '',
          userId: '',
          email: '',
          password: '',
          userRole: ''
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in AddStudent!');
      });
  };

  return (
    <div className='addstudent'>
      <div className='add-stu-container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/showstudent' className='btn btn-outline-warning float-left'>
              Show Students List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Student</h1>
            <p className='lead text-center'>Create new Student</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='Name of the Student'
                  name='name'
                  className='form-control'
                  value={student.name}
                  onChange={onChange}
                />
              </div>

              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='Index Number'
                  name='userId'
                  className='form-control'
                  value={student.userId}
                  onChange={onChange}
                />
              </div>

              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='E-mail'
                  name='email'
                  className='form-control'
                  value={student.email}
                  onChange={onChange}
                />
              </div>

              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='Phone Number'
                  name='password'
                  className='form-control'
                  value={student.password}
                  onChange={onChange}
                />
              </div>
              <div className='admin-form-group'>
                <input
                  type='date'
                  placeholder=''
                  name=''
                  className='form-control'
                  //value={student.}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='add-stu-submit-button text-center'>
                {/* Wrap the button in a centered container */}
                <div className='d-flex justify-content-center'>
                  <Link to='/showstudent' className='btn btn-outline-warning'>
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

export default AddStudent;
