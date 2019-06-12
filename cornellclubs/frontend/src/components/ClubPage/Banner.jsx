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
      items: [],
      coverPhoto,
      logo,
      name,
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.findItem = this.findItem.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.updateItems = this.updateItems.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        this.setState({
          user: userAuth,
        });
      }
      this.updateItems();
    });
  }

  updateItems() {
    const favoritesRef = firebase.database().ref('favorites');
    const newState = [];
    favoritesRef.on('value', (snapshot) => {
      const items = snapshot.val();
      if (items) {
        Object.keys(items).forEach((key) => {
          newState.push({
            id: key,
            clubName: items[key].clubName,
            email: items[key].email,
          });
        });
      }
      this.setState({
        items: newState,
      });
      console.log(this.state);
    });
  }

  findItem(clubName, email) {
    const { items } = this.state;
    const res = items.filter((item) => {
      return item.clubName === clubName && item.email === email;
    });
    return res;
  }

  addFavorite(clubName, email) {
    // console.log(this.findItem(clubName, email));
    if (this.findItem(clubName, email).length === 0) {
      const favoritesRef = firebase.database().ref('favorites');
      const item = {
        clubName,
        email,
      };
      favoritesRef.push(item);
      console.log("add")
      this.updateItems();
      return true; // success!
    }
    return false;
  }

  removeFavorite(clubName, email) {
    const item = this.findItem(clubName, email);
    if (item) {
      const favoritesRef = firebase.database().ref(`favorites/${item[0].id}`);
      favoritesRef.remove();
      this.updateItems();
      console.log("rm");
      // console.log(this.state.items);
      return true; // success!
    }
    return false;
  }

  toggleFavorite(clubName) {
    const {
      favorite,
      user,
      coverPhoto,
      logo,
      name,
    } = this.state;
    const res = favorite
      ? this.removeFavorite(clubName, user.email)
      : this.addFavorite(clubName, user.email);
    this.setState({
      favorite: !favorite, // unsuccessful don't change
      user,
      coverPhoto,
      logo,
      name,
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
