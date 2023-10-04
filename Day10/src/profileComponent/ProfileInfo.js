  // ProfileInfo.js
  import React from 'react';
  import './ProfileInfo.css';

  const ProfileInfo = () => {
    return (
      <div className="profile-info-container">
        <img
          className="profile-image"
          src="https://images.pexels.com/photos/2449543/pexels-photo-2449543.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Profile"
        />
        <div className="profile-details">
          <h2 className="profile-username">Aiswarya Subramanian</h2>
          <p className="profile-bio"></p>
          <div className="profile-stats">
           
          </div>
        </div>
      </div>
    );
  };

  export default ProfileInfo;
