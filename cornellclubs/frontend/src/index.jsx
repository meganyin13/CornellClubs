import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import App from './App';
import './index.css';

library.add(faChevronDown, faChevronUp);

ReactDOM.render(<App />, document.getElementById('root'));
