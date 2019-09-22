import Firebase from '../../firebase/Firebase'
import Notification from '../../shared/Notification'
import {SUCCESS_USER} from "./user"

export const REQUEST_AUTH = "REQUEST_AUTH"
export const SUCCESS_AUTH = "SUCCESS_AUTH"
export const ERROR_AUTH = "ERROR_AUTH"

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  success: true
}

export default (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case REQUEST_AUTH:
      return {...state, fetching: true, fetched: false, error: false, success: false}
    case SUCCESS_AUTH:
      return {...state, fetching: false, fetched: true, error: false, success: true}
    case ERROR_AUTH:
      return {...state, fetching: false, fetched: true, error: true, success: false}
    default:
      return state
  }
}

export const login = (email, password, callback) => dispatch => {
  dispatch({type: REQUEST_AUTH})
  Firebase
    .doSignInWithEmailAndPassword(email, password)
    .then(async res => {
      const item = await Firebase.db.collection("users").doc(res.user.uid).get()
      const user = item.data()
      dispatch({
        type: SUCCESS_USER, payload: {
          data: {
            uid: res.user.uid,
            email: res.user.email,
            fname: user.fname, lname: user.fname
          }
        }
      })
      Notification("success", "Success!", "You successfully signed in!")
      dispatch({type: SUCCESS_AUTH})
      callback()
    })
    .catch(error => {
      Notification("error", "Error!", error.message)
    });
}

export const signup = (email, password, fname, lname, callback) => dispatch => {
  dispatch({type: REQUEST_AUTH})
  Firebase
    .doCreateUserWithEmailAndPassword(email, password)
    .then(res => {
      const ref = Firebase.db.collection("users").doc(res.user.uid)
      ref.set({
        id: res.user.uid,
        email, fname, lname
      })
        .then(() => {
          dispatch({type: SUCCESS_AUTH})
          dispatch({
            type: SUCCESS_USER, payload: {
              data: {
                uid: res.user.uid,
                email, fname, lname
              }
            }
          })
          Notification("success", "Success!", "You successfully signed up!")
          callback()
        })
        .catch(e => Notification("error", "Error!", e.message))
    })
    .catch(error => {
      Notification("error", "Error!", error.message)
    });
}

export const logOut = callback => dispatch => {
  dispatch({type: REQUEST_AUTH})
  Firebase.doSignOut()
    .then(res => {
      dispatch({type: SUCCESS_AUTH})
      dispatch({
        type: SUCCESS_USER, payload: {
          data: {}
        }
      })
      Notification("success", "Success!", "You successfully logged out!")
    })
    .catch(e => {
      dispatch({type: ERROR_AUTH})
      Notification("error", "Error!", e.message)
    })
}