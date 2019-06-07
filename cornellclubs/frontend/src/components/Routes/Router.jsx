import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import render from '../ClubPage/index';
import Homepage from '../Home/Homepage';

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
            render={() => render(data, d.clubName)}
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

// p => <ClubPage name={d.clubName} data={data} {...p} />
