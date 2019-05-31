import React from 'react';
import PropTypes from 'prop-types';
import './Blurb.css';

const Blurb = ({ text }) => (
  <div className="blurb">
    {text}
  </div>
);

Blurb.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Blurb;
