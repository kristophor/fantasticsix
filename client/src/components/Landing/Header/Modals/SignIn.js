import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {Modal, Input, Button, Spin} from 'antd'
import {compose} from 'recompose'
import {connect} from 'react-redux'
import {login} from "../../../../redux/ducks/auth"
import td from '../td.jpg'

export default compose(
  withRouter,
  connect(state => ({ auth: state.auth }), {signin: login})
)(({visible, signin, auth, handleCancel, history, openTD}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = event => {
    signin(email, password, () => {
      handleCancel()
      history.push("/dashboard")
    })
    event.preventDefault();
  }

  return (
    <Modal
      visible={visible}
      title="Complete a form to sign in"
      onCancel={handleCancel}
      footer={[]}
    >
      <Spin spinning={auth.fetching}>
        <div className="modal-form">
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Sign In</h2>
          <div className="modal-form__item" style={{ marginBottom: "20px", textAlign: "center" }}>
            <Button style={{ backgroundColor: "rgb(33, 165, 27)", color: "#fff" }} onClick={openTD}>
              <img src={td} alt="TD Account" style={{ height: "20px", paddingRight: "20px" }} />
              <span>Login with TD account</span>
            </Button>
          </div>
          <div className="modal-form__item">
            <h4>Email</h4>
            <Input value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="modal-form__item">
            <h4>Password</h4>
            <Input value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
        </div>
        <div className="modal-form__buttons">
          <Button type="primary" onClick={signIn}>Login</Button>
        </div>
      </Spin>
    </Modal>
  )
})