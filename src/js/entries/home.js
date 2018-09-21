import React from 'react';
import ReactDOM from 'react-dom';
import Home from './../pages/containers/Home';

import './../../css/app.styl';


const appContainer = document.getElementById('app');

ReactDOM.render(
  <Home />,
  appContainer
);