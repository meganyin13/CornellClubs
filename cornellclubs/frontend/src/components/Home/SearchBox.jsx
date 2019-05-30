import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    this.setState({
      showOptions: true,
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
        <input
          type="text"
          name="clubSearch"
          value={this.state.query}
          placeholder="Search by Club Name..."
          onChange={this.updateSearch.bind(this)}
          list="clubs"
          onClick={this.showOptions.bind(this)}
          ref={node => this.node = node}
        />
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
