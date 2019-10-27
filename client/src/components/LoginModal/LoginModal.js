import React, {useState} from "react"
import PropTypes from "prop-types"
import styles from "./LoginModal.module.css"
import Modal from "../Modal"
import FormInput from "../FormInput"
import Button from "../Button"

const LoginModal = ({toggleLogin, login}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const update = fn => e => fn(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    login({
      email,
      password,
    })
  }

  return (
    <Modal close={toggleLogin}>
      <span className={styles.login__modal__title}>Log In</span>
      <form
        className={styles.login__modal__form}
        autoComplete="off"
        onSubmit={handleSubmit}>
        <FormInput label="Email" value={email} onChange={update(setEmail)} />
        <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={update(setPassword)}
        />
        <Button label="Log In" className={styles.form__button} />
      </form>
    </Modal>
  )
}

LoginModal.propTypes = {}

export default LoginModal
