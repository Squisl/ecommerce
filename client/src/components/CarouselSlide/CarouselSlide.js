import React from "react"
import PropTypes from "prop-types"
import styles from "./CarouselSlide.module.css"

const CarouselSlide = ({children, image}) => {
  return (
    <div className={styles.carousel__slide}>
      <div className={styles.carousel__slide__description}>{children}</div>
      <img src={image} alt="" className={styles.carousel__slide__image} />
    </div>
  )
}

CarouselSlide.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
}

export default CarouselSlide
