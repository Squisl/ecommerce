import React from "react"
import PropTypes from "prop-types"
import styles from "./ShopGrid.module.css"
import ProductCard from "../ProductCard/ProductCard"

const ShopGrid = props => {
  return (
    <div className={styles.shop__grid}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

ShopGrid.propTypes = {}

export default ShopGrid
