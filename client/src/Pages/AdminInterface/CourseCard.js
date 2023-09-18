import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const CourseCard = (props) => {
  const course = props.course;

  return (
    <div className='coursecard'>
      <img
        src='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c'
        alt='course'
        height={200}
      />
      <div className='cou-card-desc'>
        <h2>
          <Link to={`/show-course/${course._id}`}>{course.title}</Link>
        </h2>
        <h3>{course.author}</h3>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
