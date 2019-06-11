import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../../firebase/config';
import './SignIn.css';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.provider = firebase.auth.GoogleAuthProvider.PROVIDER_ID;
  }

  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({ user });
  //     }
  //   });
  // }

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
    const uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        {
          provider: this.provider,
          customParameters: { hd: 'cornell.edu' },
        }],
      signInSuccessUrl: '/',
      callbacks: {
        signInSuccessWithAuthResult: () => false,
      },
    };
    // console.log(typeof firebase.auth().currentUser);
    return (
      <StyledFirebaseAuth className="firebase-auth" uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
  }
}

export default SignIn;
