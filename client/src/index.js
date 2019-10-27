import React from "react"
import ReactDOM from "react-dom"
import "regenerator-runtime/runtime"
import {Provider} from "react-redux"
import App from "./components/App"
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
)
