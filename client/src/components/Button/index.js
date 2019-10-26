import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const Button = ({label, onClick}) => (
  <button onClick={onClick} className={styles.button}>
    {label}
  </button>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button
