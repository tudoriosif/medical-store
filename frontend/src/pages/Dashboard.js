import React, { useState } from "react";
import DashNav from "../components/DashNav";
import Shop from "./Shop";
import Stock from "./Stock";
import Profile from "./Profile";
import { Route, Switch, useHistory } from "react-router-dom";

function Dashboard(props) {
  let history = useHistory();

  // eslint-disable-next-line
  const [user, setUser] = useState(props.location.user || JSON.parse(localStorage.getItem('user')) || null); // Declaram o variabila de stare (user) care contine detaliile utilizatorului, provenite din backend in pagina de login, utilizandu-ne de useHistory le putem accesa din props.location.user 
  // Daca se afla deja stocat in localStorage il luam de acolo
  
  // O chestie de securitate, daca se apeleaza endpointul fara sa avem un user de la backend sa ajuga pe pagina de login.
  if(!user){
    // Mergem inapoi in pagina de login daca nu avem user activ
    history.push("/login");
  }

  return (
    <div>
      <DashNav />
      <Switch>
        <Route exact path="/dashboard" render={() => <Profile user={user}/>}/>
        <Route path="/dashboard/shop" render={() => <Shop user={user}/>} />
        <Route path="/dashboard/stock" render={() => <Stock user={user}/>} />
      </Switch>
    </div>
  );
}

export default Dashboard;
