import React from "react"
import PropTypes from "prop-types"
import styles from "./FactBox.module.css"

const FactBox = ({number, description}) => {
  return (
    <div className={styles.fact__box}>
      <span>Fact Box</span>
    </div>
  )
}

FactBox.propTypes = {
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default FactBox
