import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Load pages
import Today from './pages/Today/Today';
import MeAndHome from './pages/MeAndHome/MeAndHome';
import FriendsAndFamily from './pages/FriendsAndFamily/FriendsAndFamily';
import Community from './pages/Community/Community';

// Load components
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <div className="main-content px-4">
            <Sidebar />

            <div className="page-content">
              <Switch>
                <Route exact path='/' component={Today} />
                <Route exact path='/me-and-home' component={MeAndHome} />
                <Route exact path='/friends-and-family' component={FriendsAndFamily} />
                <Route exact path='/community' component={Community} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
