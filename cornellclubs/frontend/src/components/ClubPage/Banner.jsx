import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Banner.css';
import firebase from '../../firebase/config';

class Banner extends React.Component {
  constructor({ coverPhoto, logo, name }) {
    super({ coverPhoto, logo, name });
    this.state = {
      favorite: false,
      user: null,
      coverPhoto,
      logo,
      name,
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  toggleFavorite(clubName) {
    const favoritesRef = firebase.database().ref('favorites');
    const {
      // favorite,
      user,
      coverPhoto,
      logo,
      name,
    } = this.state;
    const item = {
      clubName,
      username: user.email,
    };
    favoritesRef.push(item);
    this.setState({
      favorite: true,
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
