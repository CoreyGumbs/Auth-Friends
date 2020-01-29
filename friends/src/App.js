import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './Components/Auth/Login';
import FriendsDashboard from './Components/Friends/FriendsDashboard';


function App() {
  return (
    <div className="App">


        <Switch>
          <Route exact path ='/dashboard' component={FriendsDashboard} />
          <Route path = '/login' component={Login} />
          <Route  component={Login} />
        
        </Switch>
    </div>
  );
}

export default App;
