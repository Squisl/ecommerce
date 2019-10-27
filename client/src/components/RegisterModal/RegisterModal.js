import React, {useState} from "react"
import PropTypes from "prop-types"
import styles from "./RegisterModal.module.css"
import Modal from "../Modal"
import FormInput from "../FormInput"
import Button from "../Button"

const RegisterModal = ({toggleRegister, register}) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const update = fn => e => fn(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    register({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    })
  }

  return (
    <Modal close={toggleRegister}>
      <span className={styles.register__modal__title}>Join Us</span>
      <form
        className={styles.register__modal__form}
        autoComplete="off"
        onSubmit={handleSubmit}>
        <FormInput
          label="First Name"
          value={firstName}
          onChange={update(setFirstName)}
        />
        <FormInput
          label="Last Name"
          value={lastName}
          onChange={update(setLastName)}
        />
        <FormInput label="Email" value={email} onChange={update(setEmail)} />
        <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={update(setPassword)}
        />
        <Button label="Register" className={styles.form__button} />
      </form>
    </Modal>
  )
}

RegisterModal.propTypes = {
  toggleRegister: PropTypes.func.isRequired,
}

export default RegisterModal
