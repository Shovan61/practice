import React from "react";
import { Home, SignInPage } from "./Pages";
import { NavBar } from "./Components";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Home />}></Route>

        <ProtectedRoute exact path="/sign">
          <SignInPage />
        </ProtectedRoute>
        {/* <Route exact path="/sign" render={() => <SignInPage />}></Route> */}
      </Switch>
    </div>
  );
}

export default App;
