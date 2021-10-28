import React from "react";
import { Home, SignInPage } from "./Pages";
import { NavBar } from "./Components";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Home />}></Route>
        <Route exact path="/sign" render={() => <SignInPage />}></Route>
      </Switch>
    </div>
  );
}

export default App;
