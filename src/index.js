import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Routes from './Routes';
import './lang/i18n'  // 다국어 지원 파일
import "./index.css";
import "./styles/reset.scss";

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

