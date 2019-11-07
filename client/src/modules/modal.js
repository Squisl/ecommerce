// Action Types
const TOGGLE_REGISTER = "TOGGLE_REGISTER"
const TOGGLE_LOGIN = "TOGGLE_LOGIN"
const TOGGLE_DELETE = "TOGGLE_DELETE"

// Action Creators
export const toggleRegister = () => ({
  type: TOGGLE_REGISTER,
})

export const toggleLogin = () => ({
  type: TOGGLE_LOGIN,
})

export const toggleDelete = () => ({
  type: TOGGLE_DELETE,
})

// Initial state of the reducer
const initialState = {
  register: false,
  login: false,
  delete: false,
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
    case TOGGLE_DELETE:
      return {
        ...state,
        delete: !state.delete,
      }
    default:
      return state
  }
}
