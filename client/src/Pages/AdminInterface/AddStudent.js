import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AddStudent.css';

import { useNavigate } from 'react-router-dom';

const AddStudent = (props) => {

  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: '',
    email: '',
    password: '',
    userId: '',
    userRole: 'student'
  });

  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:9000/admin/user/create', users)
      .then((res) => {
        setStudent({
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
                  name='title'
                  className='form-control'
                  value={student.title}
                  onChange={onChange}
                />
              </div>

              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='Index Number'
                  name='isbn'
                  className='form-control'
                  value={student.isbn}
                  onChange={onChange}
                />
              </div>

              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='E-mail'
                  name='author'
                  className='form-control'
                  value={student.author}
                  onChange={onChange}
                />
              </div>

              <div className='admin-form-group'>
                <input
                  type='text'
                  placeholder='Phone Number'
                  name='description'
                  className='form-control'
                  value={student.description}
                  onChange={onChange}
                />
              </div>
              <div className='admin-form-group'>
                <input
                  type='date'
                  placeholder='published_date'
                  name='published_date'
                  className='form-control'
                  value={student.published_date}
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
