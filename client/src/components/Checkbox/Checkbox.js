import React from "react"
import PropTypes from "prop-types"
import styles from "./Checkbox.module.css"
import {FaCheck, FaQuestionCircle} from "react-icons/fa"

const Checkbox = ({label, tooltip}) => {
  const [checked, setChecked] = React.useState(false)
  return (
    <div className={styles.container}>
      <div className={`${styles.checkbox} ${checked && styles.checked}`}>
        {checked && <FaCheck className={styles.checkmark} />}
        <input
          type="checkbox"
          className={styles.input}
          id="input"
          checked={checked}
          onClick={() => setChecked(checked => !checked)}
        />
      </div>
      <label htmlFor="input" className={styles.label}>
        {label}
      </label>
      {tooltip && <FaQuestionCircle className={styles.tooltip__icon} />}
      <span className={styles.tooltip__text}>{tooltip}</span>
    </div>
  )
}

Checkbox.propTypes = {}

export default Checkbox
