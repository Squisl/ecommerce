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
      style={{display: "inline-block", position: "relative"}}>
      {dragging && (
        <div
          style={{
            border: "dashed grey 4px",
            backgroundColor: "rgba(255,255,255,.8)",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
          }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              left: 0,
              textAlign: "center",
              color: "grey",
              fontSize: 36,
            }}>
            <div>drop here :)</div>
          </div>
        </div>
      )}
      {children}
    </div>
  )
}

DragAndDrop.propTypes = {}

export default DragAndDrop
