import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ClubLinks.css';

const ClubLinks = ({ website, email, facebook }) => (
  <div className="clubLinks">
    {
      (
        website
        && (
          <a className="website" href={website}>
            <FontAwesomeIcon icon="globe" size="2x" />
          </a>
        )
      )
    }
    {
      (
        email
        && (
          <a className="email" href={email}>
            <FontAwesomeIcon icon="envelope" size="2x" />
          </a>
        )
      )
    }
    {
      (
        facebook
        && (
          <a className="facebook" href={facebook}>
            <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
          </a>
        )
      )
    }
  </div>
);

ClubLinks.defaultProps = {
  website: null,
  email: null,
  facebook: null,
};

ClubLinks.propTypes = {
  website: PropTypes.string,
  email: PropTypes.string,
  facebook: PropTypes.string,
};

export default ClubLinks;
