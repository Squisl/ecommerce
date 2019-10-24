import React from "react"
import PropTypes from "prop-types"
import styles from "./Shop.module.css"
import Sidebar from "../../components/Sidebar/Sidebar"

const Shop = props => {
  return (
    <div className={styles.shop}>
      <Sidebar />
    </div>
  )
}

Shop.propTypes = {}

export default Shop
