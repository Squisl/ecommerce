import React, {useEffect, useState} from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import styles from "./App.module.css"
import Home from "../../routes/Home"
import Header from "../../routes/Header"
import Footer from "../../routes/Footer/Footer"
import Shop from "../../routes/Shop"
import Loading from "../Loading"
import Dashboard from "../../routes/Dashboard"
import AdminRoute from "../../hoc/AdminRoute"
import Product from "../../routes/Product"

const App = ({reload}) => {
  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem("accessToken")

  useEffect(() => {
    if (token) {
      reload(setLoading)
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <AdminRoute path="/dashboard" component={Dashboard} />
          <>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/product/:id" component={Product} />
            <Footer />
          </>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
