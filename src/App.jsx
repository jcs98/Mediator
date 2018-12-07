import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './css/app.css';

import Home from './containers/home';
import IssueDetails from './containers/issue-details-container'

import history from './history'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={IssueDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
