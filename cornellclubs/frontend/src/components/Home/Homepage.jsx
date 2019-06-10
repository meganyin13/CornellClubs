import React from 'react';
import './Homepage.css';
import SearchBox from './SearchBox';
import testData from '../../data/testData';
import Authentication from './Authentication/SignIn';
import firebase from '../../firebase/config';
import Profile from "./Authentication/Profile";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="homepage">
        {
          user
          && <Profile user={user} />
        }
        <div className="title">
          <div className="title-text">
            <h1>Cornell: Any Person, Any Club</h1>
            <h3>Find your dream club today.</h3>
          </div>
          {
            user
              ? <SearchBox data={testData} />
              : <Authentication />
          }
        </div>
      </div>
    );
  }
}


export default Homepage;
