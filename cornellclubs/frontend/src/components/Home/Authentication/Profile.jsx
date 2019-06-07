import React from 'react';
import firebase from '../../../firebase/config';
import './Profile.css';

const Profile = ({ user }) => (
  <div className="profile">
    <img src={user.photoURL} alt="Profile" />
    <p>{user.displayName || user.email}</p>
  </div>
);

Profile.propTypes = {
  user: firebase.User.isRequired,
};

export default Profile;
