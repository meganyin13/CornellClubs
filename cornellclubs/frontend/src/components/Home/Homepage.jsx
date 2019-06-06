import React from 'react';
import './Homepage.css';
import SearchBox from './SearchBox';
import testData from '../../data/testData';
import Authentication from './Authentication/SignIn';

class Homepage extends React.Component {
  render() {
    return (
      <div className="title">
        <div className="title-text">
          <h1>Cornell: Any Person, Any Club</h1>
          <h3>Find your dream club today.</h3>
        </div>
        <SearchBox data={testData} />
        <Authentication />
      </div>
    );
  }
}

export default Homepage;
