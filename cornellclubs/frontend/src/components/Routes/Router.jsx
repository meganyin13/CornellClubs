import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Homepage from '../Home/Homepage';
import ClubPage from '../ClubPage/ClubPage';

const Router = (props) => {
  const { data } = props;
  return (
    <HashRouter>
      <Route path="/" render={Homepage} />
      {
        data.map((d, i) => (
          <Route
            key={i}
            exact
            path={`/${d.shortName}`}
            render={p => <ClubPage name={d.clubName} data={data} {...p} />}
          />),
        )
      }
    </HashRouter>
  );
};

Router.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Router;
