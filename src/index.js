import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from './app/store';
import App from './app/App';

import { MAIN_BLUE_COLOR } from './constants/cssStyle';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${MAIN_BLUE_COLOR};
  }
`;

ReactDOM.render(
  <Provider store={store}>
  <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
