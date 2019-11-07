import React, {useState} from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const ImageViewer = ({images}) => {
  const [selected, setSelected] = useState(0)

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
