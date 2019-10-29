import React, {useState} from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const ImageViewer = props => {
  const [selected, setSelected] = useState(0)

  const images = [
    "https://images.unsplash.com/photo-1539176170444-67d6c8f356d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2516&q=80",
    "https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2534&q=80",
    "https://images.unsplash.com/photo-1492371451031-f0830e91b3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2661&q=80",
    "https://images.unsplash.com/photo-1555401328-659c8e900a28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80",
  ]
  return (
    <div className={styles.image__viewer}>
      <img src={images[selected]} alt="" className={styles.image_selected} />
      {images.map((url, index) => (
        <img
          key={index}
          src={url}
          alt=""
          className={`${styles.image} ${selected === index && styles.selected}`}
          onClick={() => setSelected(index)}
        />
      ))}
    </div>
  )
}

ImageViewer.propTypes = {}

export default ImageViewer
