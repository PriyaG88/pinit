import React from 'react';
import SessionFormContainer from './sessionFormContainer';

const SessionPage = () => (
  <div className='session-page-container'>
    <div className='session-background' />
    <SessionFormContainer />
    <div className='session-login'>
      <button type='button'>Log in</button>
    </div>
  </div>
);


export default SessionPage;
