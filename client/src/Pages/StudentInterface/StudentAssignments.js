import React, { useState, useRef } from 'react';
import './StudentAssignments.css';
import NavSideBar from '../../Components/NavigationBar/NavSideBar';

export default function StudentAssignments() {
  const [sidebar, setSidebar] = useState(' ');
  const showSidebar = () => setSidebar(!sidebar);

  function StudentAssignmentUpload() {
    const [assignments, setAssignments] = useState([
      { id: 1, title: 'Assignment 1', uploadedFile: null },
      { id: 2, title: 'Assignment 2', uploadedFile: null },
      // Add more assignments here
    ]);
    const [fileToUpload, setFileToUpload] = useState(null);

    const handleFileChange = (e, assignmentId) => {
      const file = e.target.files[0];
      setFileToUpload(file);

      // Update the uploaded file name for the specific assignment
      const updatedAssignments = assignments.map((assignment) => {
        if (assignment.id === assignmentId) {
          return { ...assignment, uploadedFile: file.name };
        }
        return assignment;
      });
      setAssignments(updatedAssignments);
    };

    const handleUploadClick = (assignmentId) => {
      // Trigger a click event on the hidden file input for the specific assignment
      const fileInput = document.getElementById(`fileInput-${assignmentId}`);
      fileInput.click();
    };

    const handleDeleteClick = (assignmentId) => {
      // Delete the uploaded file for the specific assignment
      const updatedAssignments = assignments.map((assignment) => {
        if (assignment.id === assignmentId) {
          return { ...assignment, uploadedFile: null };
        }
        return assignment;
      });
      setAssignments(updatedAssignments);
    };

    const handleViewClick = (assignmentId) => {
      // Handle viewing the assignment, you can implement this functionality here
      // For now, we'll just show an alert
      const assignment = assignments.find((assignment) => assignment.id === assignmentId);
      if (assignment.uploadedFile) {
        alert(`Viewing Assignment: ${assignment.title}`);
      } else {
        alert('Assignment not uploaded yet.');
      }
    };

    return (
      <div className={`studentprofile ${sidebar ? 'with-sidebar' : ''}`}>
        <NavSideBar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="stu_ass-assignment-upload">
          <h2>Student Assignment Upload</h2>

          <table className="stu_ass-table">
            <thead>
              <tr>
                <th>Assignment Name</th>
                <th>Uploaded File Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td>
                    {assignment.title}
                    <button onClick={() => handleViewClick(assignment.id)} className="stu_ass-view-button">
                      View
                    </button>
                  </td>
                  <td>{assignment.uploadedFile || '-'}</td>
                  <td>
                    <button onClick={() => handleUploadClick(assignment.id)} className="stu_ass-upload-button">
                      Upload
                    </button>
                    <input
                      type="file"
                      id={`fileInput-${assignment.id}`}
                      style={{ display: 'none' }}
                      accept="*/*"
                      onChange={(e) => handleFileChange(e, assignment.id)}
                    />
                    {assignment.uploadedFile && (
                      <button
                        onClick={() => handleDeleteClick(assignment.id)}
                        className="stu_ass-delete-button"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return <StudentAssignmentUpload />;
}
