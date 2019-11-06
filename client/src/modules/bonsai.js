import retrieve from "../utilities/retrieve"

// Action Types
const RECEIVE_BONSAI = "RECEIVE_BONSAI"
const RECEIVE_BONSAIS = "RECEIVE_BONSAIS"

// Action Creators
export const receiveBonsai = bonsai => ({
  type: RECEIVE_BONSAI,
  bonsai,
})

export const receiveBonsais = bonsais => ({
  type: RECEIVE_BONSAIS,
  bonsais,
})

export const createBonsai = data => async dispatch => {
  const result = await retrieve("/api/bonsai", "POST", data.bonsai)
  console.log(result2)
  dispatch(receiveBonsai(result))
}

export const fetchBonsais = () => async dispatch => {
  const result = await retrieve("api/bonsai/", "GET")
  console.log("Bonsais:", result)
  dispatch(receiveBonsais(result))
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
    case RECEIVE_BONSAIS:
      return {
        ...state,
        all: action.bonsais,
      }
    default:
      return state
  }
}
