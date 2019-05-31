import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ClubLinks.css';

const ClubLinks = ({ website, email, facebook }) => (
  <div className="clubLinks">
    <a className="website" href={website}>
      <FontAwesomeIcon icon="globe" size="2x" />
    </a>
    <a className="email" href={email}>
      <FontAwesomeIcon icon="envelope-square" size="2x" />
    </a>
    <a className="facebook" href={facebook}>
      <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
    </a>
  </div>
);

ClubLinks.defaultProps = {
  facebook: null,
};

ClubLinks.propTypes = {
  website: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  facebook: PropTypes.string,
};

export default ClubLinks;
