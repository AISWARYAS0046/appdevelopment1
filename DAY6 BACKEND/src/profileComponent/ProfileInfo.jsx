  // ProfileInfo.js
  import React from 'react';
  import './ProfileInfo.css';

  const ProfileInfo = () => {
    return (
      <div className="profile-info-container">
        <img
          className="profile-image"
          src="https://images.pexels.com/photos/18451635/pexels-photo-18451635/free-photo-of-white-wet-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Profile"
        />
        <div className="profile-details">
          <h2 className="profile-username">Aiswarya Subramanian</h2>
          <p className="profile-bio">😎 Flirting with success, and keeping it classy. <br></br>💼
🌟 Hustle hard, stay humble, and let your success make the noise.💪
<br></br>🚀 Living the dream, one adventure at a time. ✈️
<br></br>🤘 Catch flights, not feelings. ✈️
<br></br>😏 Life is too short to be ordinary; be legendary instead. 🏆</p>
          <div className="profile-stats">
            <span className="profile-stat">100 Posts</span>
            <span className="profile-stat">1.5M Followers</span>
            <span className="profile-stat">500 Following</span>
          </div>
        </div>
      </div>
    );
  };

  export default ProfileInfo;
