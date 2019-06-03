import React from 'react';
import PropTypes from 'prop-types';
import './RelevantTags.css';

const RelevantTags = ({ tags }) => (
  <div className="relevantTags">
    {
      tags.map(
        (tag, i) => (
          <p key={i}>
            {`#${tag}`}
          </p>
        ),
      )
    }
  </div>
);

RelevantTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RelevantTags;
