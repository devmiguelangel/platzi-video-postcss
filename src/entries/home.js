import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './../containers/screen/HomeContainer';

import './../css/home.styl';


const appContainer = document.getElementById('app');

ReactDOM.render(
  <HomeContainer />,
  appContainer
);