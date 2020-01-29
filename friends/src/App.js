import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './Components/Auth/Login';
import FriendsDashboard from './Components/Friends/FriendsDashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Friend from './Components/Friends/Friend';
 
function App() {
  return (
    <div className="App">
        <Switch>
          <PrivateRoute exact path ='/dashboard' component={FriendsDashboard} />
          {/* <Route exact path ='/dashboard' component={FriendsDashboard} /> */}
          <Route path = '/login' component={Login} />
          <Route path="/dashboard/:id/friend" component={Friend}/>
          <Route  component={Login} />
        </Switch>
    </div>
  );
}

export default App;
