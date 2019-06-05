import React from 'react';
import './Homepage.css';
import SearchBox from './SearchBox';
import testData from '../../data/testData';
import Authentication from './Authentication';

const Homepage = () => (
  <div className="title">
    <div className="title-text">
      <h1>Cornell: Any Person, Any Club</h1>
      <h3>Find your dream club today.</h3>
    </div>
    <Authentication />
    <SearchBox data={testData} />
  </div>
);

export default Homepage;
