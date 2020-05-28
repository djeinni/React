import React from 'react';
//import Header from './component/layout/Header';
import Signin from './components/layout/Signin';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup/Signup';
import { Link } from 'react-router-dom';

import './bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
            <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
        <div className='rightContentContainer'>
        <Switch>
          <Route path='/signin'>
            <Signin />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </div>
        </div>
        </Router>
  );
};

export default App;
