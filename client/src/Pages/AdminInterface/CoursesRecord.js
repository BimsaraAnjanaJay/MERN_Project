import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './Records.css';
import axios from 'axios';

function CoursesRecord(props) {
  const [course, setCourse] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/course/${id}`)
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => {
        console.log('Error from CoursesRecord');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/courses/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form CoursesRecord_deleteClick');
      });
  };

  const courseItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{course.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>E-mail</td>
            <td>{course.author}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Index Number</td>
            <td>{course.isbn}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Phone Number</td>
            <td>{course.publisher}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Birthday</td>
            <td>{course.published_date}</td>
          </tr>
          {/* <tr>
            <th scope='row'>6</th>
            <td>Description</td>
            <td>{course.description}</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='coursesrecord'>
      <div className='cou-rec-container'>
        <div className='cou-rec-row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Courses List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Courses's Record</h1>
            <p className='lead text-center'>View Course's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{courseItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(course._id);
              }}
            >
              Delete Course
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-course/${course._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Course
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesRecord;
