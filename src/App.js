import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sections from './Dashboard/Sections'
import {Provider} from './context'
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
          <Switch>
              <Route exact path="/" component={Sections}/> 
          </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;
