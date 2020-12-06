import React from 'react';
import './App.css';
import {NavBar} from './components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Help, Home, Inbox, Tasks} from './pages';

function App() {
  return (
    <Router>
      <div className="main-container">
        <NavBar/>
        <div className="content-container">
          <Switch>
            <Route path="/"
                   exact
                   component={Home}/>
            <Route path="/tasks"
                   component={Tasks}/>
            <Route path="/inbox"
                   component={Inbox}/>
            <Route path="/help"
                   component={Help}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
