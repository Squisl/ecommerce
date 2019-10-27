import retrieve from "../utilities/retrieve"
import {toggleRegister, toggleLogin} from "./modal"

// Action Types
const RECEIVE_USER_SESSION = "RECEIVE_USER_SESSION"

// Action Creators
export const receiveUserSession = user => ({
  type: RECEIVE_USER_SESSION,
  user,
})

export const register = data => dispatch => {
  retrieve("/api/user/register", "POST", data).then(data => {
    dispatch(receiveUserSession(data.user))
    localStorage.setItem("accessToken", data.token)
    dispatch(toggleRegister())
  })
}

export const login = data => dispatch => {
  retrieve("/api/user/login", "POST", data).then(data => {
    dispatch(receiveUserSession(data.user))
    localStorage.setItem("accessToken", data.token)
    dispatch(toggleLogin())
  })
}

// Initial state of the reducer
const initialState = {
  session: {},
}
// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER_SESSION:
      return {
        ...state,
        session: action.user,
      }
    default:
      return state
  }
}
