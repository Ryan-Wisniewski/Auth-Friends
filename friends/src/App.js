import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login/Login'
import UsersList from './components/UsersList/UsersList'
import AddFriend from './components/Forms/AddFriend'
import PrivateRoute from './components/PrivateRoute'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <Link to='/login' >Login</Link>
            <Link to='/friends' >Friends</Link>
            <Link to='/add-friends' >Add Friends</Link>
          </div>         
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/friends' component={UsersList} />
          <PrivateRoute exact path='/add-friends' component={AddFriend} />
        </header>
      </div>
    </Router>
  );
}

export default App;
