import React, { useState } from 'react';
import '../styles/AuthForm.css';
import { useNavigate } from 'react-router-dom';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className='auth-container'>
      <div className='form-card'>
        <div className='form-toggle'>
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Signup</button>
        </div>
        {isLogin ? (
          <div className='form'>
            <h2 className='form-title'>Login</h2>
            <input type='email' placeholder='Email' required />
            <input type='password' placeholder='Password' required />
            <a href='#' className='forgot-password' onClick={() => navigate('/forgot-password')}>Forgot Password?</a>
            <button className='form-btn'>Login</button>
            <p className='switch-text'>Not a Member? <span onClick={() => setIsLogin(false)}>Signup</span></p>
          </div>
        ) : (
          <div className='form'>
            <h2 className='form-title'>Signup</h2>
            <input type='email' placeholder='Email' required />
            <input type='password' placeholder='Password' required />
            <input type='password' placeholder='Confirm Password' required />
            <button className='form-btn'>Sign Up</button>
            <p className='switch-text'>Already a Member? <span onClick={() => setIsLogin(true)}>Login</span></p>
          </div>
        )}
      </div>
    </div>
  );
}