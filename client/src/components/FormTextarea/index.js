import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const FormTextarea = ({label, value, onChange}) => {
  return (
    <div className={styles.textarea__container}>
      <textarea
        id="textarea"
        className={styles.textarea}
        placeholder=" "
        value={value}
        onChange={onChange}></textarea>
      <label htmlFor="textarea" className={styles.textarea__label}>
        {label}
      </label>
    </div>
  )
}

FormTextarea.propTypes = {
  label: PropTypes.string.isRequired,
}

export default FormTextarea
