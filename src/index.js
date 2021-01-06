import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n'  // 다국어 지원 파일
import "./index.css";
import "./styles/reset.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

