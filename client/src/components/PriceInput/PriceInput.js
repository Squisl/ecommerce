import React from "react"
import PropTypes from "prop-types"
import styles from "./PriceInput.module.css"

const PriceInput = ({value, onChange, placeholder}) => (
  <input
    type="number"
    className={styles.input}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
)

PriceInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default PriceInput
