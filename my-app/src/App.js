import React from "react";
import { Home } from "./Pages";
import { NavBar } from "./Components";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Home />}></Route>
      </Switch>
    </div>
  );
}

export default App;
