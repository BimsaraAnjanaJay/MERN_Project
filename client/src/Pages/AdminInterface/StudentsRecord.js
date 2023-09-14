import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './StudentsRecord.css';
import axios from 'axios';

function StudentsRecord(props) {
  const [student, setStudent] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/admin/user/${id}`)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log('Error from StudentsRecord');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/admin/user/delete/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form StudentsRecord_deleteClick');
      });
  };

  const StudentItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{student.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>E-mail</td>
            <td>{student.author}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Index Number</td>
            <td>{student.isbn}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Phone Number</td>
            <td>{student.publisher}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Birthday</td>
            <td>{student.published_date}</td>
          </tr>
          {/* <tr>
            <th scope='row'>6</th>
            <td>Description</td>
            <td>{student.description}</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='studentsrecord'>
      <div className='stu-rec-container'>
        <div className='stu-rec-row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Students List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Students's Record</h1>
            <p className='lead text-center'>View Student's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{StudentItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(student._id);
              }}
            >
              Delete Student
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-student/${student._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Student
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsRecord;
