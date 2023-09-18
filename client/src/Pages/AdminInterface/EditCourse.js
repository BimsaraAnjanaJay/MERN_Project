import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Edit.css';

function EditCourse(props) {
  const [course, setCourse] = useState({
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
      .get(`http://localhost:8082/api/course/${id}`)
      .then((res) => {
        setCourse({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
        });
      })
      .catch((err) => {
        console.log('Error from EditCourse');
      });
  }, [id]);

  const onChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: course.title,
      isbn: course.isbn,
      author: course.author,
      description: course.description,
      published_date: course.published_date,
      publisher: course.publisher,
    };

    axios
      .put(`http://localhost:8082/api/course/${id}`, data)
      .then((res) => {
        navigate(`/show-course/${id}`);
      })
      .catch((err) => {
        console.log('Error in EditCourse!');
      });
  };

  return (
    <div className='editcourse'>
      <div className='edit-cou-container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Course List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Course</h1>
            <p className='lead text-center'>Update Course's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Name</label>
              <input
                type='text'
                placeholder='Title of the course'
                name='title'
                className='form-control'
                value={course.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='isbn'>Course Number</label>
              <input
                type='text'
                placeholder='ISBN'
                name='isbn'
                className='form-control'
                value={course.isbn}
                onChange={onChange}
              />
            </div>
            <br />

            {/* <div className='form-group'>
              <label htmlFor='author'>E-mail</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={course.author}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Phone Number</label>
              <textarea
                type='text'
                placeholder='Description of the course'
                name='description'
                className='form-control'
                value={course.description}
                onChange={onChange}
              />
            </div>
            <br /> */}
{/* 
            <div className='form-group'>
              <label htmlFor='published_date'>Date of Birth</label>
              <input
                type='text'
                placeholder='Published Date'
                name='published_date'
                className='form-control'
                value={course.published_date}
                onChange={onChange}
              />
            </div>
            <br /> */}

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
              Update course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCourse;
