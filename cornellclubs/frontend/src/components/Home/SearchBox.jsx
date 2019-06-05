import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBox.css';
import sleep from "../../util/sleep";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      showOptions: false,
    };
  }

  updateSearch(e) {
    this.setState({
      query: e.target.value,
    });
  }

  showOptions() {
    const { showOptions } = this.state;
    this.setState({
      showOptions: !showOptions,
    });
  }

  handleClick(clubName) {
    console.log(clubName);
    this.setState({
      query: clubName,
      showOptions: false,
    });
    sleep(300).then(
      () => window.scroll({
        top: window.innerHeight, left: 0, behavior: 'smooth',
      }),
    );
  }

  render() {
    const { query, showOptions } = this.state;
    const { data } = this.props;
    const filteredData = data.filter(
      d => d.clubName.toLowerCase().indexOf(query.toLowerCase()) !== -1
        || d.shortName.toLowerCase().indexOf(query.toLowerCase()) !== -1,
    );
    return (
      <div className="searchBox">
        <div className="input">
          <input
            type="text"
            name="clubSearch"
            value={query}
            placeholder="Search by Club Name..."
            onChange={this.updateSearch.bind(this)}
            list="clubs"
            onClick={this.showOptions.bind(this)}
          />
          <button type="submit" onClick={this.showOptions.bind(this)}>
            {showOptions ? <FontAwesomeIcon icon="chevron-up" /> : <FontAwesomeIcon icon="chevron-down" />}
          </button>
        </div>
        <div className="searchBox-options" style={{ display: showOptions ? 'block' : 'None' }}>
          {
            filteredData.map((d, i) => (
              <a href={`/#/${d.shortName}`} onClick={() => this.handleClick(d.clubName)} key={i}>
                {d.clubName}
              </a>
            ))
          }
        </div>

      </div>
    );
  }
}

SearchBox.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
