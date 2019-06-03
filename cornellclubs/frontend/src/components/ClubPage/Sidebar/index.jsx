import React from 'react';
import PropTypes from 'prop-types';
import ApplyButton from './ApplyButton';
import NotApplyButton from './NotApplyButton';
import ClubLinks from './ClubLinks';
import RelevantTags from './RelevantTags';
import Officers from './Officers';
import './index.css';

const Sidebar = ({ openApps, appLink, website, email, facebook, tags, officers }) => (
  <div className="sidebar">
    {
      openApps
        ? <ApplyButton link={appLink} />
        : <NotApplyButton />
    }
    <ClubLinks website={website} email={email} facebook={facebook} />
    <RelevantTags tags={tags} />
    <Officers officers={officers} />
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
