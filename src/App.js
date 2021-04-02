import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Checkout from './components/CheckOut/Checkout';
import NotFound from './components/NotFound/NotFound';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({
    name: null,
    email: null,
    error: null
  })
  return (
    <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Header/>
        <Switch>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/orders">
            <Checkout />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
