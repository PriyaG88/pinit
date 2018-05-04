import React, { Fragment } from 'react';
import NavBar from './navBar';

const Profile = ({ currentUser }) => (
  <Fragment>
    <NavBar currentUser={currentUser}/>
  </Fragment>
);

export default Profile;
