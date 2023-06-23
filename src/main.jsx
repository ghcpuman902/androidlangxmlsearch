import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import LocalizationWrapper from './LocalizationWrapper';

ReactDOM.render(
  <React.StrictMode>
    <LocalizationWrapper>
      <App />
    </LocalizationWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);