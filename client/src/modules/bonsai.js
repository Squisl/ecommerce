import retrieve from "../utilities/retrieve"

// Action Types
const RECEIVE_BONSAI = "RECEIVE_BONSAI"

// Action Creators
export const receiveBonsai = bonsai => ({
  type: RECEIVE_BONSAI,
  bonsai,
})

export const createBonsai = bonsai => async dispatch => {
  const result = await retrieve("/api/bonsai", "POST", bonsai)
  console.log(result)
}

// Initial State of the reducer
const initialState = {
  selected: null,
  all: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
