import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "./ProductCard.module.css"
import {FaStar} from "react-icons/fa"

const ProductCard = ({product}) => {
  const {id, name, description, age, type, size, price, images} = product || {}
  return (
    <Link to={`/product/${id}`} className={styles.product__card}>
      <img src={images[0]} alt="" className={styles.product__image} />
      <div className={styles.product__information}>
        <span className={styles.product__title}>{name}</span>
        <span className={styles.product__description}>{description}</span>
        <div className={styles.product__footer}>
          <div className={styles.product__rating}>
            <FaStar className={styles.product__star} />
            <span className={styles.product__average}>4.75</span>
            <span className={styles.product__reviews}>(239)</span>
          </div>
          <span className={styles.product__price}>{price / 100}€</span>
        </div>
      </div>
    </Link>
  )
}

ProductCard.propTypes = {}

export default ProductCard
