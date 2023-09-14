import React from 'react';
import { Link } from 'react-router-dom';
import './StudentCard.css';

const StudentCard = (props) => {
  const student = props.student;

  return (
    <div className='studentcard'>
      <img
        src='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c'
        alt='Student'
        height={200}
      />
      <div className='stu-card-desc'>
        <h2>
          <Link to={`/show-student/${student._id}`}>{student.title}</Link>
        </h2>
        <h3>{student.author}</h3>
        <p>{student.description}</p>
      </div>
    </div>
  );
};

export default StudentCard;
