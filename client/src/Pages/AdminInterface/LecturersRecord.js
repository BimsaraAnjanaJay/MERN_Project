import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './Records.css';
import axios from 'axios';

function LecturersRecord(props) {
  const [lecturer, setLecturer] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/lecturer/${id}`)
      .then((res) => {
        setLecturer(res.data);
      })
      .catch((err) => {
        console.log('Error from LecturersRecord');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/lecturers/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form LecturersRecord_deleteClick');
      });
  };

  const LecturerItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{lecturer.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>E-mail</td>
            <td>{lecturer.author}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Index Number</td>
            <td>{lecturer.isbn}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Phone Number</td>
            <td>{lecturer.publisher}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Birthday</td>
            <td>{lecturer.published_date}</td>
          </tr>
          {/* <tr>
            <th scope='row'>6</th>
            <td>Description</td>
            <td>{lecturer.description}</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='lecturersrecord'>
      <div className='lec-rec-container'>
        <div className='lec-rec-row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Lecturers List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Lecturers's Record</h1>
            <p className='lead text-center'>View Lecturer's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{LecturerItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(lecturer._id);
              }}
            >
              Delete lecturer
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-lecturer/${lecturer._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Lecturer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LecturersRecord;
