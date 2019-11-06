import React, {useState} from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const DragAndDrop = ({children, drop}) => {
  const [dragging, setDragging] = useState(false)
  const [dragCounter, setDragCounter] = useState(0)

  const handleDragEnter = e => {
    e.preventDefault()
    e.stopPropagation()

    setDragCounter(dragCounter + 1)
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true)
    }
  }
  const handleDragLeave = e => {
    e.preventDefault()
    e.stopPropagation()

    setDragCounter(dragCounter - 1)
    if (dragCounter > 0) return
    setDragging(false)
  }
  const handleDragOver = e => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDrop = e => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      drop(e.dataTransfer.files)
      e.dataTransfer.clearData()
      setDragCounter(0)
    }
  }

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={styles.dragNdrop}>
      <div className={styles.dragNdrop__area}>
        <span className={styles.dragNdrop__description}>
          Drop your images here
        </span>
      </div>
      {children}
    </div>
  )
}

DragAndDrop.propTypes = {}

export default DragAndDrop
