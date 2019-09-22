import React, {useState, useEffect} from 'react'
import {Button, Spin} from 'antd'
import {Link} from 'react-router-dom'
import SignIn from './Modals/SignIn'
import SignUp from './Modals/SignUp'
import TDModal from './Modals/TDModal'
import Notification from '../../../shared/Notification'
import {withFirebase} from "../../../firebase/context"

export default withFirebase(({firebase, user}) => {
  const [td, toggle] = useState(false)

  const [modal, set] = useState('')
  if (user.fetching) return <Spin spinning={true}/>

  const logOut = () => {
    firebase.doSignOut()
      .then(res => Notification("success", "Success!", "You successfully logged out!"))
      .catch(e => Notification("error", "Error!", e.message))
  }


  return (
    <div className="landing-header__actions">
      {
        user.data && !user.data.uid && (
          <>
          <Button onClick={() => set("register")} type="primary">Get Started</Button>
          <Button onClick={() => set('login')}>Sign In</Button>
          </>
        )
      }

      {
        user.data && user.data.uid && (
          <>
          <Link to="/dashboard" className="link-dashboard">Dashboard</Link>
          <Button onClick={() => logOut()}>Log out</Button>
          </>
        )
      }

      <TDModal handleCancel={() => toggle(false)} visible={td} />
      <SignIn openTD={() => toggle(true)} handleCancel={() => set('')} visible={modal === "login"}/>
      <SignUp openTD={() => toggle(true)} handleCancel={() => set('')} visible={modal === "register"}/>
    </div>
  )
})