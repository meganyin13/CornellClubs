import React from 'react';
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
  }

  componentWillMount() {
    const favoritesRef = firebase.database().ref('favorites');
    const newState = [];
    const { user } = this.state;
    favoritesRef.once('value', (snapshot) => {
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
      }
      this.setState({
        items: newState,
      });
    });
  }

  componentDidMount() {
    const favoritesRef = firebase.database().ref('favorites');
    favoritesRef.on('child_added', (snapshot) => {
      const { user, items } = this.state;
      const child = snapshot.val();
      if (child.email === user.email) {
        this.setState({
          items: [...items, {
            id: snapshot.key,
            clubName: child.clubName,
            email: child.email,
          }],
        });
      }
    });
    favoritesRef.on('child_removed', (snapshot) => {
      const { items } = this.state;
      this.setState({
        items: items.filter((i) => {
          return i.id !== snapshot.key;
        }),
      });
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div className="favorites">
        {
          items.map(item => (
            <span key={item.id}>
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
