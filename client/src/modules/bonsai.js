import retrieve from "../utilities/retrieve"

// Action Types
const RECEIVE_BONSAI = "RECEIVE_BONSAI"

// Action Creators
export const receiveBonsai = bonsai => ({
  type: RECEIVE_BONSAI,
  bonsai,
})

export const createBonsai = data => async dispatch => {
  const result = await retrieve("/api/bonsai", "POST", data.bonsai)
  console.log(result2)
  dispatch(receiveBonsai(result))
}

// Initial State of the reducer
const initialState = {
  selected: null,
  all: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BONSAI:
      return {
        ...state,
        all: state.all.concat(action.bonsai),
      }
    default:
      return state
  }
}
