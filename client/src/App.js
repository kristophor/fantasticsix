import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {Spin} from 'antd'
import {BrowserRouter as Router} from 'react-router-dom'
import AuthRoute from './shared/Routes/AuthRoute'
import NoAuthRoute from './shared/Routes/NoAuthRoute'
import {checkUser} from "./redux/ducks/user"
import {setDefaultBreakpoints, BreakpointProvider} from 'react-socks'
import 'firebase/auth';
import 'antd/dist/antd.css';
import './App.css';
import Landing from './views/Landing'
import Dashboard from './views/Dashboard'
import Profile from './views/Profile'
import LearningHub from './views/LearningHub'
import FantasticGroups from './views/FantasticGroups'
import FantasticGroup from './views/FantasticGroup'

setDefaultBreakpoints([
  {xsmall: 0}, // all mobile devices
  {small: 576}, // mobile devices (not sure which one's this big)
  {medium: 768}, // ipad, ipad pro, ipad mini, etc
  {large: 992}, // smaller laptops
  {xlarge: 1200} // laptops and desktops
]);


const App = connect(state => ({user: state.user}))(({check, user}) => {
  useEffect(() => {
    check()
  }, [])

  if (user.fetching) return <Spin spinning={true}/>

  return (
    <div className="App">
      <BreakpointProvider>
        <Router>
          <NoAuthRoute exact path="/" component={Landing}/>
          <AuthRoute isAuth={user.fetched && user.data && user.data.uid} exact path="/dashboard" component={Dashboard}/>
          <AuthRoute isAuth={user.fetched && user.data && user.data.uid} exact path="/profile" component={Profile}/>
          <AuthRoute isAuth={user.fetched && user.data && user.data.uid} exact path="/learning-hub" component={LearningHub}/>
          <AuthRoute isAuth={user.fetched && user.data && user.data.uid} exact path="/fantastic-groups" component={FantasticGroups}/>
          <AuthRoute isAuth={user.fetched && user.data && user.data.uid} exact path="/fantastic-groups/hl2l42ij42oj" component={FantasticGroup}/>
        </Router>
      </BreakpointProvider>
    </div>
  );
})

export default connect(null, {check: checkUser})(App);
