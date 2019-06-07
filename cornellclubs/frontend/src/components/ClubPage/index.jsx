import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronDown,
  faChevronUp,
  faEnvelope,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import ClubPage from './ClubPage';

library.add(fab, faChevronDown, faChevronUp, faEnvelope, faGlobe);

const render = (data, clubName) => {
  // ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  ReactDOM.render(<ClubPage data={data} name={clubName} />, document.getElementById('root'));
};

export default render;
