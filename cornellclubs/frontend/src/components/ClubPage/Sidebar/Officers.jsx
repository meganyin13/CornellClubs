import React from 'react';
import PropTypes from 'prop-types';
import './Officers.css';

const Officers = ({ officers }) => (
  <div className="officers">
    {
      officers.map(
        (officer, i) => (
          <div className="officer" key={i}>
            <img src={`./img/${officer.picture}`} alt={officer.name} />
            <p>{officer.name}</p>
          </div>
        ),
      )
    }
  </div>
);

Officers.propTypes = {
  officers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Officers;
