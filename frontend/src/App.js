import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Aboutus from "./Aboutus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
              <Route path="/">
              
                <Header/>
                <Hero/>
                <Aboutus />
              </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
