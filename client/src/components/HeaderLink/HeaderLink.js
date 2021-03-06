import React from "react"
import PropTypes from "prop-types"
import {NavLink} from "react-router-dom"
import styles from "./HeaderLink.module.css"

const HeaderLink = ({children, exact, path, label}) => (
  <NavLink
    exact={exact}
    to={path}
    className={styles.nav__link}
    activeClassName={styles.nav__link_orange}>
    {children} <span className={styles.label}>{label}</span>
  </NavLink>
)

HeaderLink.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default HeaderLink
