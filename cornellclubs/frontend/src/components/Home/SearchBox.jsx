import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  updateSearch(e) {
    this.setState({
      query: e.target.value,
    });
  }

  render() {
    const { query } = this.state;
    const { data } = this.props;
    const filteredData = data.filter(
      d => d.clubName.indexOf(query.toLowerCase()) !== -1
        || d.shortName.indexOf(query.toLowerCase()) !== -1,
    );
    return (
      <div className="searchBox">
        <input
          type="text"
          name="clubSearch"
          value={this.state.query}
          placeholder="Search by Club Name..."
          onChange={this.updateSearch.bind(this)}
        />
        <ul>
          {
            filteredData.map((d, i) => <li key={i}>{d.clubName}</li>)
          }
        </ul>
      </div>
    );
  }
}

SearchBox.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
