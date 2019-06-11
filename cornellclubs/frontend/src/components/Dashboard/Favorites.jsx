import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from '../../firebase/config';
import './Favorites.css';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      user,
      items: [],
    };
    console.log(user);
  }

  componentWillMount() {
    const favoritesRef = firebase.database().ref('favorites');
    const newState = [];
    const { user } = this.state;
    favoritesRef.on('value', (snapshot) => {
      const items = snapshot.val();
      if (items) {
        Object.keys(items).forEach((key) => {
          if (items[key].email === user.email) {
            newState.push({
              id: key,
              clubName: items[key].clubName,
              email: items[key].email,
            });
          }
        });
        console.log(newState);
      }
      this.setState({
        items: newState,
      });
      // console.log(this.state);
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div className="favorites">
        {
          items.map(item => (
            <span>
              <FontAwesomeIcon icon="star" />
              <a href="/#/search/">{item.clubName}</a>
            </span>
          ))
        }
      </div>
    );
  }
}

export default Favorites;
