import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Actions from './Actions'
import Logo from './FantasticSix.png'
import "./index.scss"
import ios from './ios.png'
import android from './android.png'

export default connect(state => ({ user: state.user }))(({ user }) => {
  return (
    <div className="landing-header">
      <Link to="/">
        <img src={Logo} height="75" alt="Main Logo" />
      </Link>
      <div style={{ display: "flex" }}>
        <div className="mobile-buttons">
          <img src={ios} alt="iOS's button"/>
          <img src={android} alt="Android's button"/>
        </div>
        <Actions user={user} />
      </div>
    </div>
  )
})