import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const Button = ({label, onClick, className}) => (
  <button
    onClick={onClick}
    className={`${styles.button} ${className ? className : ""}`}>
    {label}
  </button>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button
