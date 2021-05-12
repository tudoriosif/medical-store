import React from "react";
import DashNav from "../components/DashNav";
import Shop from "./Shop";
import Stock from "./Stock";
import { Route, Switch } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <DashNav />
      <Switch>
        <Route exact path="/dashboard"  component={Shop} />
        <Route path="/dashboard/shop"  component={Shop} />
        <Route path="/dashboard/stock"  component={Stock} />
      </Switch>
    </div>
  );
}

export default Dashboard;
