import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import firebase from 'firebase';

const Profile = ({ user }) => (
  <a type="submit" href="/#/dashboard" className="profile">
    <img src={user.photoURL} alt="Profile" />
    <p>{user.displayName || user.email}</p>
  </a>
);

// Profile.defaultProps = {
//   user: null,
// };

Profile.propTypes = {
  user: PropTypes.instanceOf(firebase.auth().currentUser).isRequired,
};

export default Profile;
