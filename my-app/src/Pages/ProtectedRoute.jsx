import React from "react";
import { useAuthContext } from "../Context/Context";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
  const { currentUser } = useAuthContext();
  return (
    <Route
      {...rest}
      render={() => {
        return currentUser ? <Redirect to="/"></Redirect> : children;
      }}
    ></Route>
  );
};

export default ProtectedRoute;
