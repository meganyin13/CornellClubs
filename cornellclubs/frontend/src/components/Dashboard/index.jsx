import React from 'react';
import firebase from 'firebase';
import './index.css';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      }
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="wrapper">
        <div className="dashboard">
          {
            user
            && (
            <h1>
              { `Hi, ${user.displayName || user.email}` }
            </h1>
            )
          }
          <h3>Your Favorites</h3>
        </div>
      </div>
    );
  }
}

export default Dashboard;
