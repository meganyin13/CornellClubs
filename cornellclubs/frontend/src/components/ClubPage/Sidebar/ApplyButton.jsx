import React from 'react';
import PropTypes from 'prop-types';
import './ApplyButton.css';

const ApplyButton = ({ link }) => (
  <button className="applyButton" type="button" onClick={() => `location.href=${link}`}>
    Apply Now!
  </button>
);

ApplyButton.propTypes = {
  link: PropTypes.string.isRequired,
};

export default ApplyButton;
