import React, { Component } from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from '../../firebase/config';
// import firebase, { provider } from '../../firebase/config';

const provider = firebase.auth.GoogleAuthProvider.PROVIDER_ID;

class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.provider = provider;
  }

  login() {
    firebase.auth().signInWithPopup(this.provider)
      .then((result) => {
        const { user } = result;
        this.setState({
          user,
        });
      });
  }

  logout() {
    firebase.auth.signOut()
      .then(() => {
        this.setState({
          user: null,
        });
      });
  }

  render() {
    // const { user } = this.state;
    const uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        {
          // provider: firebase.auth().GoogleAuthProvider.PROVIDER_ID,
          provider: this.provider,
          customParameters: { hd: 'cornell.edu' },
        }],
      signInSuccessUrl: '/',
      callbacks: {
        signInSuccessWithAuthResult: () => false,
      },
    };
    return (
      <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      // user
      //   ? <button type="submit" onClick={this.logout}>Log Out</button>
      //   : <button type="submit" onClick={this.login}>Log In</button>
    );
  }
}

export default Authentication;
