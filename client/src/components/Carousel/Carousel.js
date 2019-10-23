import React from "react"
import PropTypes from "prop-types"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
import styles from "./Carousel.module.css"

const Carousel = ({children}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % activeSlide.length)
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [currentSlide])

  const activeSlide = children.map((slide, index) => (
    <div
      className={`${styles.slide} ${
        currentSlide === index ? styles.show : styles.invisible
      }`}
      key={index}>
      {slide}
    </div>
  ))
  return (
    <div className={styles.carousel}>
      <div
        className={styles.carousel__slides}
        style={{transform: `translateX(-${currentSlide * 100}%)`}}>
        {activeSlide}
      </div>
      <button
        className={`${styles.carousel__button} ${styles.carousel__button_left}`}
        onClick={() => {
          setCurrentSlide(
            (currentSlide - 1 + activeSlide.length) % activeSlide.length,
          )
        }}>
        <FaChevronLeft className={styles.carousel__button__icon} />
      </button>
      <button
        className={`${styles.carousel__button} ${styles.carousel__button_right}`}
        onClick={() => {
          setCurrentSlide((currentSlide + 1) % activeSlide.length)
        }}>
        <FaChevronRight className={styles.carousel__button__icon} />
      </button>
      <div className={styles.carousel__indicator}>
        {[...Array(children.length)].map((_, index) => (
          <button
            className={`${styles.carousel__indicator__button} ${
              index === currentSlide ? styles.button_selected : ""
            }`}
            onClick={() => {
              setCurrentSlide(index)
            }}></button>
        ))}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Carousel
