import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditStudent.css';

function EditStudent(props) {
  const [student, setStudent] = useState({
    title: '',
    isbn: '',
    author: '',
    description: '',
    published_date: '',
    publisher: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/student/${id}`)
      .then((res) => {
        setStudent({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
        });
      })
      .catch((err) => {
        console.log('Error from EditStudent');
      });
  }, [id]);

  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: student.title,
      isbn: student.isbn,
      author: student.author,
      description: student.description,
      published_date: student.published_date,
      publisher: student.publisher,
    };

    axios
      .put(`http://localhost:8082/api/student/${id}`, data)
      .then((res) => {
        navigate(`/show-student/${id}`);
      })
      .catch((err) => {
        console.log('Error in EditStudent!');
      });
  };

  return (
    <div className='editstudent'>
      <div className='edit-stu-container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Student List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Student</h1>
            <p className='lead text-center'>Update Student's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Name</label>
              <input
                type='text'
                placeholder='Title of the Student'
                name='title'
                className='form-control'
                value={student.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='isbn'>Index</label>
              <input
                type='text'
                placeholder='ISBN'
                name='isbn'
                className='form-control'
                value={student.isbn}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='author'>E-mail</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={student.author}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Phone Number</label>
              <textarea
                type='text'
                placeholder='Description of the Student'
                name='description'
                className='form-control'
                value={student.description}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='published_date'>Date of Birth</label>
              <input
                type='text'
                placeholder='Published Date'
                name='published_date'
                className='form-control'
                value={student.published_date}
                onChange={onChange}
              />
            </div>
            <br />

            {/* <div className='form-group'>
              <label htmlFor='publisher'>Publisher</label>
              <input
                type='text'
                placeholder='Publisher of the Book'
                name='publisher'
                className='form-control'
                value={book.publisher}
                onChange={onChange}
              />
            </div>
            <br /> */}

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditStudent;
