import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import 'normalize.css/normalize.css';

import * as serviceWorker from './serviceWorker';
import ApplicationContainer from './ApplicationContainer';

const GlobalStyles = createGlobalStyle`
  html {
    font-family: 'Lato', sans-serif;
    height: 100vh;
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyles />
    <ApplicationContainer />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
