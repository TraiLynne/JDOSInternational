import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom'

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Component(s)
import App from './App';
import * as serviceWorker from './serviceWorker';

let rootElement = document.getElementById('root');

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
