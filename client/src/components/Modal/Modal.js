import React from "react"
import {createPortal} from "react-dom"
import PropTypes from "prop-types"
import {MdClose} from "react-icons/md"
import styles from "./Modal.module.css"

const Modal = ({children}) => {
  return createPortal(
    <div className={styles.modal__overlay}>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <button className={styles.modal__close}>
            <MdClose />
          </button>
        </div>
        <div className={styles.modal__content}>{children}</div>
      </div>
    </div>,
    document.body,
  )
}

Modal.propTypes = {}

export default Modal
