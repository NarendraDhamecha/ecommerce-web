import React, { useState } from 'react';
import '../styles/AuthForm.css';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset Password Email:', email);
    // alert('Check the console for submitted email!');
  };

  return (
    <div className='auth-container'>
      <div className='form-card'>
        <h2 className='form-title'>Reset Password</h2>
        <p className='form-subtext'>Enter your email to receive a password reset link.</p>
        <form onSubmit={handleSubmit}>
          <input type='email' name='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button type='submit' className='form-btn'>Send Reset Link</button>
        </form>
        <p className='switch-text'>Remembered your password? <span onClick={() => navigate('/')}>Login</span></p>
      </div>
    </div>
  );
}

export default ForgotPassword;










