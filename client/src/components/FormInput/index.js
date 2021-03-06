import React, {useRef} from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const FormInput = ({label, value, onChange, type}) => {
  const input = useRef(null)

  const focus = () => input.current.focus()

  return (
    <div className={styles.form__input} onClick={focus}>
      <input
        id={label}
        className={styles.input}
        placeholder=" "
        ref={input}
        value={value}
        onChange={onChange}
        type={type}
      />
      <label htmlFor={label} className={styles.input__label}>
        {label}
      </label>
    </div>
  )
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FormInput
