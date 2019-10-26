// Action Types
const RECEIVE_USER_SESSION = "RECEIVE_USER_SESSION"

// Action Creators
export const receiveUserSession = user => ({
  type: RECEIVE_USER_SESSION,
  user,
})

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
