import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ openApps, website, email, facebook, tags, officers }) => (
  <div className="sidebar">
    openApps ? <ApplyButton />
    : <NotApplyButton />
  </div>
);

Sidebar.defaultProps = {
  facebook: null,
  tags: [],
};

Sidebar.propTypes = {
  openApps: PropTypes.bool.isRequired,
  website: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  facebook: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  officers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
