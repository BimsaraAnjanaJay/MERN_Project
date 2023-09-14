import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import StudentHome from './Pages/StudentInterface/StudentHome';
import StudentDashboard from './Pages/StudentInterface/StudentDashboard';
import StudentProfile from './Pages/StudentInterface/StudentProfile';
import StudentAssignments from './Pages/StudentInterface/StudentAssignments';
import CourseContent from './Pages/StudentInterface/CourseContent'; 

import LecturerHome from './Pages/LecturerInterface/LecturerHome';
import LecturerDashboard from './Pages/LecturerInterface/LecturerDashboard';
import LecturerProfile from './Pages/LecturerInterface/LecturerProfile';
import LecturerAddAss from './Pages/LecturerInterface/LecturerAddAss';
import LecturerViewAss from './Pages/LecturerInterface/LecturerViewAss';
import FileUpload from './Pages/LecturerInterface/FileUpload';

import AdminHome from './Pages/AdminInterface/AdminHome';
import AddStudent from './Pages/AdminInterface/AddStudent';
import EditStudent from './Pages/AdminInterface/EditStudent';
import ShowStudent from './Pages/AdminInterface/ShowStudent';
import StudentsRecord from './Pages/AdminInterface/StudentsRecord';

function App() {
  const handleLogin = (role) => {
    console.log(`User logged in as ${role}`);
  };

  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/studenthome" element={<StudentHome />} />
            <Route path="/studentdashboard" element={<StudentDashboard />} />
            <Route path="/studentprofile" element={<StudentProfile />} />
            <Route path="/studentassignments" element={<StudentAssignments />} />
            <Route path="/course/:courseTitle" element={<CourseContent />} />
          <Route path="/lecturerhome" element={<LecturerHome />} />
            <Route path="/lecturerdashboard" element={<LecturerDashboard />} />
            <Route path="/lecturerprofile" element={<LecturerProfile />} />
            <Route path="/LecturerAddAss" element={<LecturerAddAss />} />
            <Route path="/LecturerViewAss" element={<LecturerViewAss />} />
            <Route path="/fileupload" element={<FileUpload />} />
          <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/editstudent" element={<EditStudent />} />
            <Route path="/showstudent" element={<ShowStudent />} />
            <Route path="/studentsrecord" element={<StudentsRecord />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
