import {createStore, applyMiddleware, compose, combineReducers} from "redux"
import thunk from "redux-thunk"
import user from "../modules/user"
import modal from "../modules/modal"
import error from "../modules/error"
import bonsai from "../modules/bonsai"
import refreshToken from "../middlewares/refreshToken"

// Enable redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Root reducer
const reducer = combineReducers({
  user,
  modal,
  bonsai,
  error,
})

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(refreshToken, thunk)),
)
