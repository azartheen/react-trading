import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import 'fontsource-roboto';
import { Dashboard } from './routes/dashboard';
import { Login } from './routes/login';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <App />
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Redirect from="/" to="/dashboard" />
    </Switch>
  </Router>
   ,
  document.getElementById('root')
);
