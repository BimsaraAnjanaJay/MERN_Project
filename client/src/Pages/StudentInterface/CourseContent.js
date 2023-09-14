import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CourseContent.css';

export default function CourseContent({ courseTitle }) {
  const [courseMaterials, setCourseMaterials] = useState([]);

  useEffect(() => {
    // Fetch course materials for the given courseTitle from your backend
    // For demonstration purposes, we'll simulate fetching data with a setTimeout
    setTimeout(() => {
      // Replace this with actual data fetched from your backend
      const materials = [
        { id: 1, title: 'Uploaded Course Material Name 1', url: '/path-to-lecture-1' },
        { id: 2, title: 'Uploaded Course Material Name 2', url: '/path-to-lecture-2' },
        // Add more materials here
      ];
      setCourseMaterials(materials);
    }, 1000); // Simulating a 1-second delay

    // You can use a library like axios to make actual API requests
  }, [courseTitle]);

  return (
    <div className="course_content">
      <Link to="/studentdashboard" className="back-button">
        &lt; Back to Student Dashboard
      </Link>
      <h2>Course Materials</h2>
      <ul>
        {courseMaterials.map((material) => (
          <li key={material.id}>
            <a href={material.url} target="_blank" rel="noopener noreferrer">
              {material.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
