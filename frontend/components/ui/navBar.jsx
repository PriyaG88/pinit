import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../icons/logo';
import Avatar from 'react-avatar';

const NavBar = ({ currentUser }) => {
  let userName;

  if (currentUser) {
    userName = currentUser.email.slice(0, currentUser.email.indexOf('@'));
  }

  return (
    <nav className='top-nav'>
    <div className='logo-container nav-logo'>
      <NavLink to='/'>
        <Logo />
      </NavLink>
    </div>
    <div className='search-container'>
      <div className='search-icon'>
      </div>
      <div className='search-input'>
        <input type='text' placeholder='Search'></input>
      </div>
    </div>
    <div className='nav-item'>
      <NavLink to='/'>Home</NavLink>
    </div>
    <div className='nav-item'>
      <NavLink to='/explore'>Explore</NavLink>
    </div>
    { userName ?
      <NavLink to={`/${userName}`} className='avatar-link'>
        <Avatar name={currentUser.name} size={30} round={true} className='avatar'/>
        <span className='user-name'>{currentUser.name}</span>
      </NavLink>
    :
      <div className='nav-item'>
        <NavLink to='/login'>Login</NavLink>
      </div>
    }
  </nav>
  );
};

export default NavBar;
