import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

const Banner = ({ coverPhoto, logo, name }) => (
  <div className="banner">
    <img className="cover" alt="cover" src={`./img/${coverPhoto || 'default_cover.jpg'}`} />
    <img className="logo" alt="logo" src={`./img/${logo || 'default_logo.jpg'}`} />
    <h1>{name}</h1>
  </div>
);

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
