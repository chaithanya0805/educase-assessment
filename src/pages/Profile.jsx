import React from 'react';
import '../styles/index.css';
import LadyImg from '../../Lady.png'; // Path to the uploaded image

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <h2>Account Settings</h2>
      </div>
      
      <div className="profile-content">
        <div className="profile-user-info">
          <div className="profile-avatar-container">
            <img src={LadyImg} alt="Profile" className="profile-avatar" />
            <div className="camera-icon-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5H16.83L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H4V7H8.05L9.88 5H14.12L15.95 7H20V19ZM12 9C9.24 9 7 11.24 7 14C7 16.76 9.24 19 12 19C14.76 19 17 16.76 17 14C17 11.24 14.76 9 12 9ZM12 17C10.35 17 9 15.65 9 14C9 12.35 10.35 11 12 11C13.65 11 15 12.35 15 14C15 15.65 13.65 17 12 17Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="profile-details">
            <h3 className="profile-name">Marry Doe</h3>
            <p className="profile-email">Marry@Gmail.com</p>
          </div>
        </div>
        
        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        
        <div className="dashed-divider"></div>
      </div>
    </div>
  );
};

export default Profile;
