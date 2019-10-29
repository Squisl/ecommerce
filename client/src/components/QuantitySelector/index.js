import React, {useState} from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const QuantitySelector = ({max = 10}) => {
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState("")

  const handleLogic = data => {
    if (data > max) {
      setQuantity(max)
      setError(`No more than ${max} in Stock`)
    } else if (data < 1) {
      setQuantity(1)
      setError("No less than 1")
    } else {
      setQuantity(data)
      error.length > 0 && setError("")
    }
  }
  // Handle -/+ button
  const handleClick = step => () => handleLogic(quantity + step)
  //Handle direct input
  const update = e => {
    const number = parseInt(e.target.value)
    handleLogic(number)
  }
  // Prevent empty quantity
  const handleBlur = e => {
    e.target.value === "" && setQuantity(1)
  }

  return (
    <div className={styles.quantity__selector__container}>
      <div className={styles.quantity__selector}>
        <button
          onClick={handleClick(-1)}
          className={styles.quantity__selector__button}>
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={update}
          onBlur={handleBlur}
          className={styles.quantity__selector__input}
        />
        <button
          onClick={handleClick(1)}
          className={styles.quantity__selector__button}>
          +
        </button>
      </div>
      <p className={styles.quantity__selector__error}>{error}</p>
    </div>
  )
}

QuantitySelector.propTypes = {
  max: PropTypes.number.isRequired,
}

export default QuantitySelector
