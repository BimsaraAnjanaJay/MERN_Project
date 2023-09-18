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

  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

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
      email,
      password,
    }
    console.log(userData)

    axios.post("http://localhost:9000/auth", userData)
        .then((res) => {
        console.log("Response from server:", res.data);
        if (res.data) {
            console.log("User id:", res.data._id);
            console.log("Login successful!");
            toast.success("Login successful!");
            navigate("../StudentHome");
        } else {
            toast.error(res.data.message); 
        }
        })
        .catch((error) => {
        console.error('Login error:', error);
        toast.error('Login failed!');
        setError('Invalid email or password');
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
            id='email'
            name='email'
            value={email}
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
            id='password'
            name='password'
            value={password}
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
        { error && <p className='login_error'>{error}</p> }
      </form>

    </div>
  );
}

export default Login;