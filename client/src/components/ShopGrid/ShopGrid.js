import React from "react"
import PropTypes from "prop-types"
import styles from "./ShopGrid.module.css"
import ProductCard from "../ProductCard/ProductCard"

const ShopGrid = ({bonsais}) => {
  return (
    <div className={styles.shop__grid}>
      {bonsais.map(bonsai => (
        <ProductCard product={bonsai} />
      ))}
    </div>
  )
}

ShopGrid.propTypes = {}

export default ShopGrid
