import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import axios from 'axios';

function Login({ onLogin }) {

  //   /////////////////////////

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Mock login logic - replace with your actual authentication logic
  //   if (email === 'lec@example.com' && password === '123') {
  //     onLogin('lecturer'); // Set the user role to 'lecturer'
  //     navigate('/lecturerhome'); // Navigate to the lecturer home
  //   }
  //   else if (email === 'stu@example.com' && password === '123') {
  //     onLogin('student'); // Set the user role to 'student'
  //     navigate('/studenthome'); // Navigate to the student home
  //   }
  //   else if (email === 'adm@example.com' && password === '123') {
  //     onLogin('admin'); // Set the user role to 'admin'
  //     navigate('/adminhome'); // Navigate to the admin home
  //   }
  //   else {
  //     setError('Invalid email or password');
  //   }
  // };
  
  // //////////////////////////////////

  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: '',
  })

  const { userEmail, userPassword } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      userEmail,
      userPassword,
    }

    axios.post("http://localhost:5000/", userData)
        .then((res) => {
        console.log("Response from server:", res.data);
        if (res.data) {
            console.log("User id:", res.data._id);
            console.log("Login successful!");
            toast.success("Login successful!");
            // navigate("../");
        } else {
            toast.error(res.data.message); 
        }
        })
        .catch((error) => {
        console.error('Login error:', error);
        toast.error('Login failed!');
        });
  }

  ////////////////////////////////////

  return (
    <div class="login_center">
      <h1>Login</h1>
      <form onSubmit={onSubmit} method="post">
        <div class="login_txt_field">      
          <input
            type='email'
            className='form-control'
            id='userEmail'
            name='userEmail'
            value={userEmail}
            placeholder='Enter your email'
            onChange={onChange}
          />
          <span></span>
          <label>Email</ label>
        </div>
        <div class="login_txt_field">          
          <input
            type='password'
            className='form-control'
            id='userPassword'
            name='userPassword'
            value={userPassword}
            placeholder='Enter password'
            onChange={onChange}
          />
          <span></span>
          <label>Password</label>
        </div>
      <p>
        <Link to="/forgot-password" class="login_pass">Forgot Password?</Link><br />
      </p>
        <button className="login_submit" type="submit">Log In</button>
        {error && <p className='login_error'>{error}</p>}
      </form>

    </div>
  );
}

export default Login;