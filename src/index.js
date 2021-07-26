import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import './index.css';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
  <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
