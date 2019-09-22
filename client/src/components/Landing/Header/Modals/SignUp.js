import React, {useState} from 'react'
import {Modal, Input, Button, Checkbox} from 'antd'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'recompose'
import {signup} from "../../../../redux/ducks/auth"
import Notification from '../../../../shared/Notification'
import td from '../td.jpg'

export default compose(
  withRouter,
  connect(null, {register: signup})
)(
  ({visible, register, history, handleCancel, openTD}) => {
    const [email, setEmail] = useState('')
    const [firstName, setFN] = useState('')
    const [lastName, setLN] = useState('')
    const [passwordOne, setPasswordOne] = useState('')
    const [passwordTwo, setPasswordTwo] = useState('')

    const go = event => {
      if (passwordOne !== passwordTwo) {
        Notification("error", "Error!", "Passwords do not match!")
        return
      }

      register(email, passwordOne, firstName, lastName, () => {
        handleCancel()
        history.push('/dashboard')
      })
      event.preventDefault();
    }

    return (
      <Modal
        visible={visible}
        title="Complete a form to sign up"
        onCancel={handleCancel}
        footer={[]}
      >
        <div className="modal-form">
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Get Started</h2>
          <div className="modal-form__item" style={{ marginBottom: "20px", textAlign: "center" }}>
            <Button style={{ backgroundColor: "rgb(33, 165, 27)", color: "#fff" }} onClick={() => openTD()}>
              <img src={td} alt="TD Account" style={{ height: "20px", paddingRight: "20px" }} />
              <span>Login with TD account</span>
            </Button>
          </div>
          <div className="modal-form__item" style={{ marginBottom: "20px" }}>
            <h4>Legal Name</h4>
            <Input value={firstName} onChange={e => setFN(e.target.value)}/>
          </div>
          <div className="modal-form__item" style={{ marginBottom: "20px" }}>
            <h4>Legal Surname</h4>
            <Input value={lastName} onChange={e => setLN(e.target.value)}/>
          </div>
          <div className="modal-form__item" style={{ marginBottom: "20px" }}>
            <h4>Email</h4>
            <Input value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="modal-form__item" style={{ marginBottom: "20px" }}>
            <h4>Password</h4>
            <Input value={passwordOne} onChange={e => setPasswordOne(e.target.value)}/>
          </div>
          <div className="modal-form__item" style={{ marginBottom: "20px" }}>
            <h4>Confirm Password</h4>
            <Input value={passwordTwo} onChange={e => setPasswordTwo(e.target.value)}/>
          </div>
          <div className="modal-form__item" style={{ marginBottom: "20px" }}>
            <Checkbox>I'm not a robot</Checkbox>
          </div>
        </div>
        <div className="modal-form__buttons" style={{ textAlign: "center", marginTop: "30px" }}>
          <Button type="primary" onClick={go}>Register</Button>
        </div>
      </Modal>
    )
  }
)

// export default withFirebase(
//   ({visible, firebase, handleCancel}) => {
//     const [email, setEmail] = useState('')
//     const [firstName, setFN] = useState('')
//     const [lastName, setLN] = useState('')
//     const [passwordOne, setPasswordOne] = useState('')
//     const [passwordTwo, setPasswordTwo] = useState('')
//
//     const register = event => {
//       if (passwordOne !== passwordTwo) {
//         Notification("error", "Error!", "Passwords do not match!")
//         return
//       }
//
//       firebase
//         .doCreateUserWithEmailAndPassword(email, passwordOne)
//         .then(res => {
//           handleCancel()
//           Notification("success", "Success!", "You successfully signed up!")
//         })
//         .catch(error => {
//           Notification("error", "Error!", error.message)
//         });
//       event.preventDefault();
//
//     }
//
//     return (
//       <Modal
//         visible={visible}
//         title="Complete a form to sign up"
//         onCancel={handleCancel}
//         footer={[]}
//       >
//         <div className="modal-form">
//           <div className="modal-form__item">
//             <h4>Legal Name</h4>
//             <Input value={firstName} onChange={e => setFN(e.target.value)}/>
//           </div>
//           <div className="modal-form__item">
//             <h4>Legal Surname</h4>
//             <Input value={lastName} onChange={e => setLN(e.target.value)}/>
//           </div>
//           <div className="modal-form__item">
//             <h4>Email</h4>
//             <Input value={email} onChange={e => setEmail(e.target.value)}/>
//           </div>
//           <div className="modal-form__item">
//             <h4>Password</h4>
//             <Input value={passwordOne} onChange={e => setPasswordOne(e.target.value)}/>
//           </div>
//           <div className="modal-form__item">
//             <h4>Confirm Password</h4>
//             <Input value={passwordTwo} onChange={e => setPasswordTwo(e.target.value)}/>
//           </div>
//         </div>
//         <div className="modal-form__buttons">
//           <Button type="primary" onClick={register}>Register</Button>
//         </div>
//       </Modal>
//     )
//   })