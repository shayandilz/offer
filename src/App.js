import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sections from './Dashboard/Sections'
import {Provider} from './context'
import './App.css';
import Tracks from './Search/SearchMap'
import Products from './sections/Products'
class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
        <Switch>
            <Route exact path="/" component={Sections}/> 
            <Route  path="/searchresult" component={Tracks}/>
            <Route  path="/products/item/:id" component={Products}/>
         </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;
