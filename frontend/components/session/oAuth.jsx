import React from 'react';

const OAuth = () => (
  <div className='o-auth-login'>
    <p className='or'>Or</p>
    <button type='button' className='session-login-btn fb-btn'>
      Continue with Facebook
    </button>
    <button type='button' className='session-login-btn google-btn'>
      Continue with Google
    </button>
  </div>
);

export default OAuth;
