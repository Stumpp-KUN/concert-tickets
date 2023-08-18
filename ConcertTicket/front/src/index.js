import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/mainPage';
import Tickets from './components/tickets';
import Map from './components/map';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/tickets" component={Tickets} />
      <Route exact path="/map" component={Map} />
    </Switch>
  </Router>,
  rootElement
);