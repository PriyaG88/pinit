import React from 'react';
import NavBar from './navBar';

const Home = ({ currentUser }) => {
  return (<div>
    <NavBar currentUser={currentUser} />
  </div>);
};

export default Home;
