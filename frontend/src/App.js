import React from "react";
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import Register from './Register'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/login" exact component={LoginPage}/>
              <Route path="/register" exact component={Register}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
