import React from 'react';
import ReactDOM from 'react-dom';

import App from './react/App.js';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// './scss/custom.scss' needs to come after 'bootstrap/dist/css/bootstrap.min.css'
// because of css imports also follow cascading pattern
import './bootstrap-styles/custom.scss';

// import your own style-sheet as './index.css' or './index.scss'
import './index.scss';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './assets/favicon.ico';

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
