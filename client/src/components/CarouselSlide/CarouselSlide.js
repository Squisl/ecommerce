import React from "react"
import PropTypes from "prop-types"
import styles from "./CarouselSlide.module.css"

const CarouselSlide = ({title, facts = [], image}) => {
  return (
    <div className={styles.carousel__slide}>
      <div className={styles.carousel__slide__description}>
        <p className={styles.carousel__slide__title}>{title}</p>
        <ul className={styles.carousel__slide__facts}>
          {facts.map(fact => (
            <li>{fact}</li>
          ))}
        </ul>
      </div>
      <img src={image} alt="" className={styles.carousel__slide__image} />
    </div>
  )
}

CarouselSlide.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default CarouselSlide
