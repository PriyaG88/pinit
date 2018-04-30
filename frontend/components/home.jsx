import React from 'react';
import Logo from '../icons/logo';

const Home = () => (
  <div>
    <nav className='top-nav'>
      <div className='logo-container nav-logo'>
        <Logo />
      </div>
      <div className='search-container'>
        <div className='search-icon'>
        </div>
        <div className='search-input'>
          <input type='text' placeholder='Search'></input>
        </div>
      </div>
    </nav>
  </div>
);

export default Home;
