import retrieve from "../utilities/retrieve"

// Action Types
const RECEIVE_BONSAI = "RECEIVE_BONSAI"
const RECEIVE_BONSAIS = "RECEIVE_BONSAIS"
const DELETE_BONSAI = "DELETE_BONSAI"

// Action Creators
export const receiveBonsai = bonsai => ({
  type: RECEIVE_BONSAI,
  bonsai,
})

export const receiveBonsais = bonsais => ({
  type: RECEIVE_BONSAIS,
  bonsais,
})

export const removeBonsai = bonsai_id => ({
  type: DELETE_BONSAI,
  bonsai_id,
})

export const createBonsai = data => async dispatch => {
  const result = await retrieve("/api/bonsai", "POST", data.bonsai)
  console.log(result2)
  dispatch(receiveBonsai(result))
}

export const fetchBonsai = (bonsai_id, setLoading) => async dispatch => {
  console.log("bonsai id", bonsai_id)
  const result = await retrieve(`/api/bonsai/${bonsai_id}`, "GET")
  console.log("Fetch bonsai", result)
  dispatch(receiveBonsai(result[0]))
  setLoading(false)
}

export const fetchBonsais = () => async dispatch => {
  const result = await retrieve("/api/bonsai/", "GET")
  console.log("Bonsais:", result)
  dispatch(receiveBonsais(result))
}

export const deleteBonsai = bonsai_id => async dispatch => {
  const result = await retrieve(`/api/bonsai/${bonsai_id}`, "DELETE")
  console.log("Delete result", result)
  dispatch(removeBonsai(result.id))
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
        selected: action.bonsai,
      }
    case RECEIVE_BONSAIS:
      return {
        ...state,
        all: action.bonsais,
      }
    case DELETE_BONSAI:
      return {
        ...state,
        all: state.all.filter(bonsai => bonsai.id !== action.bonsai_id),
      }
    default:
      return state
  }
}
