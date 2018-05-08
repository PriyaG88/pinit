import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from 'react-avatar';
import NavBar from './navBar';
import NewBoard from '../board/newBoard';
const Profile = props => {
  const { currentUser, location } = props;

  if (location.pathname !== '/explore') {
    return (
      <Fragment>
        <NavBar currentUser={currentUser}/>
        <div className='user-info-container'>
          <div className='user-info'>
            <div className='name'>
              {currentUser.name}
            </div>
            <div className='follow-info'>
              <div className='followers follow-info-item'>
                <NavLink to={`/${currentUser.email}/followers`}>10 followers</NavLink>
              </div>
              <div className='following follow-info-item'>
                <NavLink to={`/${currentUser.email}/following`}>15 following</NavLink>
              </div>
            </div>
          </div>
          <div className='user-avatar-lg'>
            <Avatar name={currentUser.name} size={100} round={true} />
          </div>
        </div>
        <NewBoard />
      </Fragment>
    );
  } else {
    return null;
  }
};

export default Profile;
