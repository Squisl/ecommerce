import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import styles from "./App.module.css"
import Home from "../../routes/Home"
import Header from "../../routes/Header"
import Footer from "../../routes/Footer/Footer"

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
