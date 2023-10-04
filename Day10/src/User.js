import React from 'react';
import Header from './profileComponent/Header';
import ProfileInfo from './profileComponent/ProfileInfo';
import Posts from './profileComponent/Posts';

import Footer from './Component/Footer';
import './User.css';
const User = () => {
  return (
    <div>
      <Header />
      <ProfileInfo />
      <Posts />
   
      <Footer />
      <div className="blank-space"></div>
    </div>
  );
}

export default User;