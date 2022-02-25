import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import User from './components/service/user';

const user = new User;

ReactDOM.render(
  <React.StrictMode>
    <App user={user}/>
  </React.StrictMode>,
  document.getElementById('root')
);

