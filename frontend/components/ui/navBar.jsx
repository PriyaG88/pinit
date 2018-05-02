import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../icons/logo';

const NavBar = () => (
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
    <div className='nav-item'>
      <NavLink to='/home'>Home</NavLink>
    </div>
    <div className='nav-item'>
      <NavLink to='/explore'>Explore</NavLink>
    </div>
  </nav>
);

export default NavBar;
