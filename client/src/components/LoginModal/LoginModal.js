import React from "react"
import PropTypes from "prop-types"
import styles from "./LoginModal.module.css"
import Modal from "../Modal/Modal"
import FormInput from "../FormInput/FormInput"
import Button from "../Button"

const LoginModal = props => {
  return (
    <Modal>
      <span className={styles.login__modal__title}>Log In</span>
      <form className={styles.login__modal__form} autoComplete="off">
        <FormInput label="Email" />
        <FormInput label="Password" type="password" />
        <Button label="Log In" className={styles.form__button} />
      </form>
    </Modal>
  )
}

LoginModal.propTypes = {}

export default LoginModal
