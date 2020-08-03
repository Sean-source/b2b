import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from './components/Home/Home.jsx';
import Profile from './components/Profile/Profile.jsx';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route
          path="/profile"
          component={Profile}
        />
        <Route
          path="/"
          component={Home}
        />
      </Switch>
    </div>
  );
}

export default App;