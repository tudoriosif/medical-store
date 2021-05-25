import React from "react";
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    // Implementare sistem de routing
    <Router>
      <div className="App">
          <Switch>
              {/* In functie de path-ul pe care intram se va randa componenta pagina respectiva */}
              <Route exact path="/"  component={HomePage}/>
              <Route path="/login"  component={Login}/>
              <Route path="/register"  component={Register}/>
              <Route path="/dashboard"  component={Dashboard}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
