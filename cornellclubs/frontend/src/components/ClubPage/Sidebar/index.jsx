import React from 'react';
import PropTypes from 'prop-types';
import ApplyButton from './ApplyButton';
import NotApplyButton from './NotApplyButton';
import './index.css';
import ClubLinks from './ClubLinks';

const Sidebar = ({ openApps, appLink, website, email, facebook, tags, officers }) => (
  <div className="sidebar">
    {
      openApps
        ? <ApplyButton link={appLink} />
        : <NotApplyButton />
    }
    <ClubLinks website={website} email={email} facebook={facebook} />
  </div>
);

Sidebar.defaultProps = {
  appLink: null,
  facebook: null,
  tags: [],
};

Sidebar.propTypes = {
  openApps: PropTypes.bool.isRequired,
  appLink: PropTypes.string,
  website: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  facebook: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  officers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidebar;
