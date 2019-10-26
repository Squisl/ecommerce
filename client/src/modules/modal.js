// Action Types
const TOGGLE_REGISTER = "TOGGLE_REGISTER"
const TOGGLE_LOGIN = "TOGGLE_LOGIN"

// Action Creators
export const toggleRegister = () => ({
  type: TOGGLE_REGISTER,
})

export const toggleLogin = () => ({
  type: TOGGLE_LOGIN,
})

// Initial state of the reducer
const initialState = {
  register: false,
  login: false,
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_REGISTER:
      return {
        ...state,
        register: !state.register,
      }
    case TOGGLE_LOGIN:
      return {
        ...state,
        login: !state.login,
      }
    default:
      return state
  }
}
