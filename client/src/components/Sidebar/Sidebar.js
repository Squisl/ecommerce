import React from "react"
import PropTypes from "prop-types"
import styles from "./Sidebar.module.css"
import Checkbox from "../Checkbox/Checkbox"

const Sidebar = props => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__group}>
        <span className={styles.group__title}>Type</span>
        <Checkbox
          label="Indoor"
          tooltip="Plants that are naturally tropical or subtropical are indoor bonsai. They can be treated almost the same year around."
        />
        <Checkbox
          label="Outdoor"
          tooltip="Outdoor bonsai are hardy plants that need a winter rest period at a specific temperature each year in order to survive. They cannot be kept indoors continually."
        />
      </div>
      <div className={styles.sidebar__group}>
        <span className={styles.group__title}>Size</span>
        <Checkbox label="Large" tooltip="Tree height: 76cm - 203cm" />
        <Checkbox label="Medium" tooltip="Tree height: 25cm - 91cm" />
        <Checkbox label="Miniature" tooltip="Tree height: 3cm - 25cm" />
      </div>
      <div className={styles.sidebar__group}>
        <span className={styles.group__title}>Price</span>
      </div>
    </div>
  )
}

Sidebar.propTypes = {}

export default Sidebar
