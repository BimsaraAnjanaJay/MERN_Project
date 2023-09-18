import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const LecturerCard = (props) => {
  const lecturer = props.lecturer;

  return (
    <div className='lecturercard'>
      <img
        src='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c'
        alt='Lecturer'
        height={200}
      />
      <div className='lec-card-desc'>
        <h2>
          <Link to={`/show-lecturer/${lecturer._id}`}>{lecturer.title}</Link>
        </h2>
        <h3>{lecturer.author}</h3>
        <p>{lecturer.description}</p>
      </div>
    </div>
  );
};

export default LecturerCard;
