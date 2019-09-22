import Firebase from '../../firebase/Firebase'

export const REQUEST_USER = "REQUEST_USER"
export const SUCCESS_USER = "SUCCESS_USER"
export const ERROR_USER = "ERROR_USER"

const initialState = {
  fetching: true,
  data: {},
  error: null,
  fetched: true,
  success: false
}

export default (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case REQUEST_USER:
      return {...state, fetching: true, fetched: false, error: false, success: false}
    case SUCCESS_USER:
      return {...state, fetching: false, fetched: true, error: false, success: true, data: payload.data}
    case ERROR_USER:
      return {...state, fetching: false, fetched: true, error: true, success: false, message: payload.message}
    default:
      return state
  }
}

export const checkUser = () => dispatch => {
  dispatch({type: REQUEST_USER})
  Firebase.auth.onAuthStateChanged(user => {
      dispatch({
        type: SUCCESS_USER, payload: {
          data: user ? {
            uid: user.uid,
            email: user.email
          } : {}
        }
      })
  })
}
