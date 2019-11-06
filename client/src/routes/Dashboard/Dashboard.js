import React, {useEffect} from "react"
import PropTypes from "prop-types"
import {Link, NavLink, Route} from "react-router-dom"
import styles from "./Dashboard.module.css"
import DashBonsai from "../../components/DashBonsai"
import DashForm from "../../components/DashForm"

const Dashboard = ({match}) => {
  useEffect(() => {
    document.title = "Saisei | Dashboard"
  }, [])

  const routes = (
    <>
      <Route exact path={`${match.path}`} component={DashBonsai} />
      <Route path={`${match.path}/form`} component={DashForm} />
    </>
  )

  return (
    <div className={styles.dashboard}>
      <header className={styles.dashboard__header}>
        <nav className={styles.dashboard__nav}>
          <NavLink
            to={`${match.path}`}
            className={styles.dashboard__nav__link}
            activeClassName={styles.dashboard__nav__link_active}>
            Bonsai
          </NavLink>
          <NavLink
            to={`${match.path}/users`}
            className={styles.dashboard__nav__link}
            activeClassName={styles.dashboard__nav__link_active}>
            Users
          </NavLink>
        </nav>
        <div className={styles.dashboard__header__right}>
          <Link to="/" className={styles.dashboard__nav__link}>
            Back To Shop
          </Link>
        </div>
      </header>
      {routes}
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
