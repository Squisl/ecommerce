import React from "react"
import PropTypes from "prop-types"
import styles from "./FactBox.module.css"
import animateValue from "../../utilities/animateValue"
import useIntersect from "../../hooks/useIntersect"

const FactBox = ({number, description, color}) => {
  const [digit, setDigit] = React.useState(0)

  const [ref, entry] = useIntersect({
    threshold: 0.5,
  })

  React.useEffect(() => {
    console.log(entry.intersectionRatio)
    if (entry.intersectionRatio > 0.5) {
      animateValue(0, number, 2000, setDigit)
      ref(null)
    }
  }, [entry.intersectionRatio])

  return (
    <div
      className={styles.fact__box}
      ref={ref}
      style={{backgroundColor: color}}>
      <span className={styles.fact__digit}>{digit}</span>
      <span className={styles.fact__description}>{description}</span>
    </div>
  )
}

FactBox.propTypes = {
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default FactBox
