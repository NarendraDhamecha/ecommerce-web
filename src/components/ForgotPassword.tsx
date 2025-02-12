// import React from 'react';
import '../styles/AuthForm.css';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className='auth-container'>
      <div className='form-card'>
        <h2 className='form-title'>Reset Password</h2>
        <p className='form-subtext'>Enter your email to receive a password reset link.</p>
        <input type='email' placeholder='Enter your email' required />
        <button className='form-btn'>Send Reset Link</button>
        <p className='switch-text'>Remembered your password? <span onClick={() => navigate('/')}>Login</span></p>
      </div>
    </div>
  );
}

export default ForgotPassword;
