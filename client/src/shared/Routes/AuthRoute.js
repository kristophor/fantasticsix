import {Redirect, Route} from "react-router-dom";
import {connect} from 'react-redux'
import React from "react";

export default ({ component: Component, isAuth, ...rest }) => {
  return <Route {...rest} render={props => (
    isAuth ? <Component {...props} /> : <Redirect to={{pathname: '/'}} />
  )}/>
};