import {Redirect, Route} from "react-router-dom";
import React from "react";

export default ({ component: Component, isAuth: isAuth, ...rest }) => (
  <Route {...rest} render={props => (
    isAuth
      ? <Redirect to={{ pathname: '/' }} />
      : <Component  {...props} />
  )} />
);