import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Homepage from '../Home/Homepage';
import ClubPage from '../ClubPage/ClubPage';
import Dashboard from '../Dashboard';

const Router = (props) => {
  const { data } = props;
  return (
    <HashRouter>
      <Route exact path="/" render={() => <Homepage />} />
      <Route path="/search" render={() => <Homepage />} />
      {
        data.map((d, i) => (
          <Route
            key={i}
            exact
            path={`/search/${d.shortName}`}
            render={p => <ClubPage name={d.clubName} data={data} {...p} />}
          />),
        )
      }
      <Route path="/dashboard" render={() => <Dashboard />} />
    </HashRouter>
  );
};

Router.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Router;
