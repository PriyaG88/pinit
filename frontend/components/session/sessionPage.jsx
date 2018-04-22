import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from './sessionFormContainer';

const SessionPage = () => (
  <div className='session-page-container'>
    <div className='session-background' />
    <SessionFormContainer />
    <div className='session-login'>
      <Link to='/login'><button type='button'>Log in</button></Link>
    </div>
  </div>
);


export default SessionPage;
