import React from "react"
import {connect} from "react-redux"
import {Route, Redirect, withRouter} from "react-router-dom"

const AdminRoute = ({component: Component, role, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      role === "admin" ? <Component {...props} /> : <Redirect to="/" />
    }
  />
)

const mapStateToProps = state => ({
  role: state.user.session.role,
})

export default withRouter(connect(mapStateToProps)(AdminRoute))
