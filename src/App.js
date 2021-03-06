import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext= createContext();





function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
  
    <Router>
       
        <Switch>
          <Route path="/home">
            <Home/>
            </Route>
            <PrivateRoute path="/login">
              <Login />
            </PrivateRoute>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
   </Router>

   </UserContext.Provider>

  );
}

export default App;
