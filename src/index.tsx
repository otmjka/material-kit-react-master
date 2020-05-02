import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from 'views/Components/Components';
import LandingPage from 'views/LandingPage/LandingPage';
import ProfilePage from "views/ProfilePage/ProfilePage";
import LoginPage from "views/LoginPage/LoginPage";
import RegisterPage from "views/RegisterPage/RegisterPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" strict exact component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/components" component={Components} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
