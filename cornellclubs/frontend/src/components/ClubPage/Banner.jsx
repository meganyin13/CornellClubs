import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Banner.css';
import firebase from '../../firebase/config';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    const { coverPhoto, logo, name } = this.props;
    this.state = {
      favorite: false,
      user: null,
      id: null,
      coverPhoto,
      logo,
      name,
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
    // this.findItem = this.findItem.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    // this.updateItems = this.updateItems.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        this.setState({
          user: userAuth,
        });
      }
    });
    const favoritesRef = firebase.database().ref('favorites');
    favoritesRef.once('value', (snapshot) => {
      const items = snapshot.val();
      const { name, user } = this.state;
      Object.keys(items).forEach((key) => {
        if (items[key].clubName === name && items[key].email === user.email) {
          this.setState({
            favorite: true,
            id: snapshot.key,
          });
        }
      });
    });
  }

  componentDidMount() {
    const favoritesRef = firebase.database().ref('favorites');
    const { user, name } = this.state;
    if (user) {
      favoritesRef.on('child_added', (snapshot) => {
        const { item } = snapshot.val();
        // console.log(this.state.user);
        if (item.email === user.email && item.clubName === name) {
          this.setState({
            favorite: true,
          });
        }
      });
      favoritesRef.on('child_removed', (snapshot) => {
        const { item } = snapshot.val();
        // const { user, name } = this.state;
        if (item.email === user.email && item.clubName === name) {
          this.setState({
            favorite: false,
          });
        }
      });
    }
  }

  // updateItems() {
  //   const favoritesRef = firebase.database().ref('favorites');
  //   favoritesRef.on('value', (snapshot) => {
  //     const items = snapshot.val();
  //     if (items) {
  //       Object.keys(items).forEach((key) => {
  //         newState.push({
  //           id: key,
  //           clubName: items[key].clubName,
  //           email: items[key].email,
  //         });
  //       });
  //     }
  //     this.setState({
  //       items: newState,
  //     });
  //     console.log(this.state);
  //   });
  // }

  // findItem(clubName, email) {
  //   const { items } = this.state;
  //   const res = items.filter(item => (
  //     item.clubName === clubName && item.email === email
  //   ));
  //   return res;
  // }

  removeFavorite() {
    const { id } = this.state;
    console.log(id);
    const favoritesRef = firebase.database().ref(`favorites/${id}`);
    favoritesRef.remove();
  }

  addFavorite(clubName, email) {
    const favoritesRef = firebase.database().ref('favorites');
    const newFavoriteRef = favoritesRef.push();
    const item = {
      clubName,
      email,
    };
    newFavoriteRef.set(item).then(() => {
      // console.log(snap.getKey());
      this.setState({
        id: newFavoriteRef.key,
      });
    });
  }

  toggleFavorite(clubName) {
    const {
      favorite,
      user,
    } = this.state;
    // eslint-disable-next-line no-unused-expressions
    favorite
      ? this.removeFavorite()
      : this.addFavorite(clubName, user.email);
    this.setState({
      favorite: !favorite,
    });
  }

  render() {
    const {
      favorite,
      coverPhoto,
      logo,
      name,
    } = this.state;
    return (
      <div className="banner">
        <img className="cover" alt="cover" src={`./img/${coverPhoto || 'default_cover.jpg'}`} />
        <img className="logo" alt="logo" src={`./img/${logo || 'default_logo.jpg'}`} />
        <h1>{name}</h1>
        <button type="submit" onClick={() => this.toggleFavorite(name)}>
          <FontAwesomeIcon icon="star" style={{ color: favorite ? '#ffc824' : 'white' }} />
        </button>
      </div>
    );
  }
}

Banner.defaultProps = {
  coverPhoto: null,
  logo: null,
};

Banner.propTypes = {
  coverPhoto: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Banner;
