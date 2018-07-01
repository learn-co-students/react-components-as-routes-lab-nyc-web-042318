import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import {BroswerRouter as Router, Route, NavLink} from 'react-router-dom'

render (
  <App />,
  document.getElementById('root')
);
