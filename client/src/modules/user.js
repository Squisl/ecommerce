import retrieve from "../utilities/retrieve"
import {toggleRegister, toggleLogin} from "./modal"
import {receiveError} from "./error"

// Action Types
const RECEIVE_USER_SESSION = "RECEIVE_USER_SESSION"
const CLEAR_USER_SESSION = "CLEAR_USER_SESSION"

// Action Creators
export const receiveUserSession = user => ({
  type: RECEIVE_USER_SESSION,
  user,
})

export const clearUserSession = () => ({
  type: CLEAR_USER_SESSION,
})

export const register = data => async dispatch => {
  try {
    const result = await retrieve("/api/user/register", "POST", data)
    dispatch(receiveUserSession(result.user))
    localStorage.setItem("accessToken", result.token)
    dispatch(toggleRegister())
  } catch (e) {
    console.error(e)
    dispatch(receiveError(e))
  }
}

export const login = data => async dispatch => {
  try {
    const result = await retrieve("/api/user/login", "POST", data)
    console.log("DATA:", result)
    dispatch(receiveUserSession(result.user))
    localStorage.setItem("accessToken", result.token)
    dispatch(toggleLogin())
  } catch (e) {
    console.error(e)
    dispatch(receiveError(e))
  }
}

export const logout = () => async dispatch => {
  try {
    localStorage.removeItem("accessToken")
    await retrieve("/api/user/logout")
    dispatch(clearUserSession())
  } catch (e) {
    console.error(e)
  }
}

export const reload = setLoading => async dispatch => {
  try {
    const result = await retrieve("/api/user/reload")
    console.log("RELOAD RESULT: ", result)
    dispatch(receiveUserSession(result))
    setLoading(false)
  } catch (e) {
    console.error(e)
  }
}

// Initial state of the reducer
const initialState = {
  session: {},
  authenticated: false,
}
// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER_SESSION:
      return {
        ...state,
        session: action.user,
        authenticated: true,
      }
    case CLEAR_USER_SESSION:
      return {
        ...state,
        session: {},
        authenticated: false,
      }
    default:
      return state
  }
}
