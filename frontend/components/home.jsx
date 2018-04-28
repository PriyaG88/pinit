import React from 'react';
import Logo from '../icons/logo';

const Home = () => (
  <div>
    <nav>
      <div className='logo-container'>
        <Logo />
      </div>
      <div className='search-container'>
        <div className='search-icon'>
        </div>
        <div>
          <input></input>
        </div>
      </div>
    </nav>
  </div>
);

export default Home;
