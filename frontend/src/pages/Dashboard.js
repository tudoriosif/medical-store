import React, { useState } from "react";
import DashNav from "../components/DashNav";
import Shop from "./Shop";
import Stock from "./Stock";
import Login from "./Login";
import { Route, Switch } from "react-router-dom";

function Dashboard(props) {
  const [user, setUser] = useState(props.location.user); // Declaram o variabila de stare (user) care contine detaliile utilizatorului, provenite din backend in pagina de login, utilizandu-ne de useHistory le putem accesa din props.location.user 
  
  // O chestie de securitate, daca se apeleaza endpointul fara sa avem un user de la backend sa ajuga pe pagina de login.
  if(!user){
    return <Login/>
  }

  return (
    <div>
      <DashNav />
      <Switch>
        <Route exact path="/dashboard" component={Shop} />
        <Route path="/dashboard/shop" component={Shop} />
        <Route path="/dashboard/stock" component={Stock} />
      </Switch>
    </div>
  );
}

export default Dashboard;
