import React, {useEffect, useState} from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import styles from "./App.module.css"
import Home from "../../routes/Home"
import Header from "../../routes/Header"
import Footer from "../../routes/Footer/Footer"
import Shop from "../../routes/Shop"
import Loading from "../Loading"

const App = ({reload}) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      return reload(setLoading)
    }
    setLoading(false)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
