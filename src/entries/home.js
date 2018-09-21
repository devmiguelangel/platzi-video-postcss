import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './../containers/screen/HomeContainer';
import data from './../api/categoryApi.json';


const appContainer = document.getElementById('app');

ReactDOM.render(
  <HomeContainer data={data} />,
  appContainer
);