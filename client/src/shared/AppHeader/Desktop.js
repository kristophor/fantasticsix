import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Button} from 'antd'
import {connect} from 'react-redux'
import ios from './ios.png'
import Logo from './FantasticSix.png'
import {compose} from 'recompose'
import android from './android.png'
import {logOut} from "../../redux/ducks/auth"
import "./index.scss"

export default compose(
  withRouter,
  connect(null, { logout: logOut })
)(
  ({logout, history}) => {
    return (
      <div className="app-header" style={{padding: "30px"}}>
        <Link to="/">
          <img src={Logo} height="75" alt="Main Logo" />
        </Link>
        <div className="app-header__links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/learning-hub">Learning Hub</Link>
          <Link to="/fantastic-groups">Fantastic Groups</Link>
        </div>
        <div style={{display: "flex"}}>
          <div className="mobile-buttons">
            <img src={ios} alt="iOS's button"/>
            <img src={android} alt="Android's button"/>
          </div>
          <Button style={{marginRight: "20px"}} onClick={() => logout(() => history.push('/'))}>Log Out</Button>
          <Link to="/profile" className="link-dashboard">My Profile</Link>
        </div>
      </div>
    )
  }
)
