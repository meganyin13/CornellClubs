import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

const Banner = ({ coverPhoto, logo, name }) => (
  <div className="banner">
    <img className="cover" alt="cover" src={`./img/${coverPhoto}`} />
    <img className="logo" alt="logo" src={`./img/${logo}`} />
    <h1>{name}</h1>
  </div>
);

Banner.propTypes = {
  coverPhoto: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Banner;
