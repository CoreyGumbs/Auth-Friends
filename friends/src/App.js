import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './Components/Auth/Login';
import Logout from './Components/Auth/Logout';
import FriendsDashboard from './Components/Friends/FriendsDashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Friend from './Components/Friends/Friend';
import AddFriend from './Components/AddFriend/AddFriend';

 
function App() {
  return (
    <div className="App">
        <Switch>
          <PrivateRoute exact path ='/dashboard' component={FriendsDashboard} />
          <Route exact path="/:id/friend" component={Friend}/>
          <Route exact path="/dashboard/add-friend" component={AddFriend}/>
          <Route path='/logout' component={Logout} />
          <Route path = '/login' component={Login} />
          <Route  component={Login} />
        </Switch>
    </div>
  );
}

export default App;
