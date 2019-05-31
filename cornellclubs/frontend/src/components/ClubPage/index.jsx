import React from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner';
import './index.css';
import Blurb from "./Blurb";

const ClubPage = (props) => {
  const { data, name } = props;
  const clubData = data.filter(
    d => d.clubName === name,
  )[0];
  return (
    <div className="clubpage">
      <Banner logo={clubData.logo} coverPhoto={clubData.coverPhoto} name={clubData.clubName} />
      <Blurb text={clubData.blurb} />
    </div>
  );
};

ClubPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
};

export default ClubPage;
