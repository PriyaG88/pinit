import React from 'react';
import SessionFormContainer from './sessionFormContainer';

const SessionPage = () => (
  <div className='session-page-container'>
    <div className='session-background' />
    <SessionFormContainer />
    <div className='session-info-container'>
      <p>Pinterest helps you find ideas to try.</p>
      <button type='button' className='info-btn'>How it works</button>
    </div>
  </div>
);


export default SessionPage;
