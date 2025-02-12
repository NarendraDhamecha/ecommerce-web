import React, { useState } from 'react';
import '../styles/AuthForm.css';
import { useNavigate } from 'react-router-dom';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // alert('Check the console for submitted data');
  };

  return (
    <div className='auth-container'>
      <div className='form-card'>
        <div className='form-toggle'>
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Signup</button>
        </div>
        <form className='form' onSubmit={handleSubmit}>
          <h2 className='form-title'>{isLogin ? 'Login' : 'Signup'}</h2>
          <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
          <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} required />
          {!isLogin && <input type='password' name='confirmPassword' placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange} required />}
          {isLogin && <a href='#' className='forgot-password' onClick={() => navigate('/forgot-password')}>Forgot Password?</a>}
          <button type='submit' className='form-btn'>{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p className='switch-text'>{isLogin ? 'Not a Member?' : 'Already a Member?'} <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Signup' : 'Login'}</span></p>
      </div>
    </div>
  );
}



