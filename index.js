import React from 'react';
import ReactDOM from 'react-dom';

import Media from './src/js/playlist/components/media';

import './src/css/app.styl';


const appContainer = document.getElementById('app');

ReactDOM.render(
  <Media />,
  appContainer
);