import React from "react"
import PropTypes from "prop-types"
import styles from "./RegisterModal.module.css"
import Modal from "../Modal/Modal"
import FormInput from "../FormInput/FormInput"
import Button from "../Button"

const RegisterModal = props => {
  return (
    <Modal>
      <span className={styles.register__modal__title}>Join Us</span>
      <form className={styles.register__modal__form} autoComplete="off">
        <FormInput label="First Name" />
        <FormInput label="Last Name" />
        <FormInput label="Email" />
        <FormInput label="Password" type="password" />
        <Button label="Register" className={styles.form__button} />
      </form>
    </Modal>
  )
}

RegisterModal.propTypes = {}

export default RegisterModal
