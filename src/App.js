import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Sections from './Dashboard/Sections'
import {Provider} from './context'
import './App.css';
import Tracks from './Search/SearchMap'
import Products from './sections/Products'
import MainNavbar from './Dashboard/Navbar/categories_branch/Main';
import Footer from './sections/Footer';
class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <Switch>
                        <React.Fragment>
                            <MainNavbar/>
                            <Route exact="exact" path="/" component={Sections}/>
                            <Route path="/searchresult" component={Tracks}/>
                            <Route path="/products/item/:id" component={Products}/>
                            <Footer/>
                        </React.Fragment>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
