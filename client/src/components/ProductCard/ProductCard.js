import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "./ProductCard.module.css"
import {FaStar} from "react-icons/fa"

const ProductCard = ({id}) => {
  return (
    <Link to={`/product/${id}`} className={styles.product__card}>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5b3a44a7e17ba3cdbff49f51/1539195997320-J212JGO7BRA6SMM0GTEG/ke17ZwdGBToddI8pDm48kCl1x--4RGe0f9rZuGy64Ft7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URHe2Lo5za6ASaFCuzKZgMWGVmTRGSyPgVER_Q3AmVrgALq2mQJfde5D8Jp5eEG3Lg/Photoshoot+%232+Oct+06+178.jpg?format=2500w"
        alt=""
        className={styles.product__image}
      />
      <div className={styles.product__information}>
        <span className={styles.product__title}>Japanese White Pine</span>
        <span className={styles.product__description}>
          One of the most important elements of a bonsai is the quality of its
          surface roots. This pine has especially dramatic ones that to grab the
          earth.
        </span>
        <div className={styles.product__footer}>
          <div className={styles.product__rating}>
            <FaStar className={styles.product__star} />
            <span className={styles.product__average}>4.75</span>
            <span className={styles.product__reviews}>(239)</span>
          </div>
          <span className={styles.product__price}>70.99€</span>
        </div>
      </div>
    </Link>
  )
}

ProductCard.propTypes = {}

export default ProductCard
