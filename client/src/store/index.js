import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import user from "../modules/user";

// Enable redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Root reducer
const reducer = combineReducers({
  user
});

export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
