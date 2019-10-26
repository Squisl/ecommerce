import React from "react"
import PropTypes from "prop-types"
import styles from "./Pagination.module.css"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

const Pagination = props => {
  return (
    <div className={styles.pagination}>
      <button className={styles.pagination__arrow}>
        <FaChevronLeft />
      </button>
      <button className={styles.pagination__page}>3</button>
      <button className={styles.pagination__page}>4</button>
      <button className={`${styles.pagination__page} ${styles.selected}`}>
        5
      </button>
      <button className={styles.pagination__page}>6</button>
      <button className={styles.pagination__page}>7</button>
      <button className={styles.pagination__arrow}>
        <FaChevronRight />
      </button>
    </div>
  )
}

Pagination.propTypes = {}

export default Pagination
