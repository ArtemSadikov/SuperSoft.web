import React from 'react';
import './App.css';
import {NavBar} from './components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Help, Home, Inbox, Tasks} from './pages';
import {Provider} from 'react-redux';
import {useStore} from './redux/store';
import {initialAppState} from './redux/reduxConfig';

function App() {
  const store = useStore(initialAppState);
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
