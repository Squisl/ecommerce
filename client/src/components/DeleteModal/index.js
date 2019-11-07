import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import Modal from "../Modal"
import Button from "../Button"

const DeleteModal = ({toggle, del}) => {
  return (
    <Modal close={toggle}>
      <div className={styles.delete__modal}>
        <span className={styles.delete__modal__message}>Are you sure?</span>
        <div className={styles.delete__modal__buttons}>
          <Button label="Yes" onClick={del} />
          <Button label="No" onClick={toggle} />
        </div>
      </div>
    </Modal>
  )
}

DeleteModal.propTypes = {}

export default DeleteModal
