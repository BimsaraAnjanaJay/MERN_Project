import React, { useState, useEffect } from 'react';
import './LecturerViewAss.css';
import LecNavSideBar from '../../Components/NavigationBar/LecNavSideBar';

export default function LecturerViewAss() {
  const [sidebar, setSidebar] = useState(' ');
  const showSidebar = () => setSidebar(!sidebar);

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    
    const fetchedAssignments = [
      { id: 1, studentName: 'Pahasara', assignmentTitle: 'Assignment 1' },
      { id: 2, studentName: 'Lakruwan', assignmentTitle: 'Assignment 1' },
    ];

    setAssignments(fetchedAssignments);
  }, []);

  const viewAssignment = (assignmentId) => {
    
  };

  const deleteAssignment = (assignmentId) => {

  };

  return (
    <div className={`lecturerviewass ${sidebar ? 'with-sidebar' : ''}`}>
      <LecNavSideBar sidebar={sidebar} setSidebar={setSidebar} />
      <div>
        <h2 className='lec_view_ass_header'><center>View Student Assignments</center></h2>
        <table className='lec_view_ass_table'>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Assignment Title</th>
              <th>Actions </th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id}>
                <td>{assignment.studentName}</td>
                <td>{assignment.assignmentTitle}</td>
                <td>
                  {}
                  <button onClick={() => viewAssignment(assignment.id)}>View</button>
                  <button onClick={() => deleteAssignment(assignment.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
