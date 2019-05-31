import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBox.css';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    // const { clickOutside } = this.props;
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

  showOptions(e) {
    console.log('in!');
    const { showOptions } = this.state;
    this.setState({
      showOptions: !showOptions,
    });
  }

  handleClick = (e) => {
    console.log('hi');
    if (this.node.contains(e.target)) {
      this.setState({
        showOptions: true,
      })
    } else {
      this.setState({
        showOptions: false,
      })
    }
  };

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
            value={this.state.query}
            placeholder="Search by Club Name..."
            onChange={this.updateSearch.bind(this)}
            list="clubs"
            onClick={this.showOptions.bind(this)}
            // ref={node => this.node = node}
          />
          <button onClick={this.showOptions.bind(this)}>
            {showOptions ? <FontAwesomeIcon icon='chevron-up'/> : <FontAwesomeIcon icon='chevron-down'/>}
          </button>
        </div>
        <div className="searchBox-options" style={{ display: showOptions ? 'block' : 'None' }}>
          {
            filteredData.map((d, i) => <a href={`/#/${d.shortName}`} key={i}>{d.clubName}</a>)
          }
        </div>

      </div>
    );
  }
}

SearchBox.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  // clickOutside: PropTypes.bool.isRequired,
};
