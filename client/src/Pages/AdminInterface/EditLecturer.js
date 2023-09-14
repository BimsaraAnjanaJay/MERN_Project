import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Edit.css';

function EditLecturer(props) {
  const [lecturer, setLecturer] = useState({
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
      .get(`http://localhost:8082/api/lecturer/${id}`)
      .then((res) => {
        setLecturer({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
        });
      })
      .catch((err) => {
        console.log('Error from EditLecturer');
      });
  }, [id]);

  const onChange = (e) => {
    setLecturer({ ...lecturer, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: lecturer.title,
      isbn: lecturer.isbn,
      author: lecturer.author,
      description: lecturer.description,
      published_date: lecturer.published_date,
      publisher: lecturer.publisher,
    };

    axios
      .put(`http://localhost:8082/api/lecturer/${id}`, data)
      .then((res) => {
        navigate(`/show-lecturer/${id}`);
      })
      .catch((err) => {
        console.log('Error in EditLecturer!');
      });
  };

  return (
    <div className='editlecturer'>
      <div className='edit-stu-container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Lecturer List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Lecturer</h1>
            <p className='lead text-center'>Update Lecturer's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Name</label>
              <input
                type='text'
                placeholder='Title of the Lecturer'
                name='title'
                className='form-control'
                value={lecturer.title}
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
                value={lecturer.isbn}
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
                value={lecturer.author}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Phone Number</label>
              <textarea
                type='text'
                placeholder='Description of the lecturer'
                name='description'
                className='form-control'
                value={lecturer.description}
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
                value={lecturer.published_date}
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
              Update Lecturer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditLecturer;
