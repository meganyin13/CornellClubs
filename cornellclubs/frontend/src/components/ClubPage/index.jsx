import React from 'react';
import PropTypes from 'prop-types';

const ClubPage = (props) => {
  const { data, name } = props;
  const clubData = data.filter(
    d => d.clubName === name,
  )[0];
  return (<h1>{clubData.clubName}</h1>);
};

ClubPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
};

export default ClubPage;
