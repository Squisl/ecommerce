import React, {useEffect} from "react"
import PropTypes from "prop-types"
import styles from "./Dashboard.module.css"
import FormInput from "../../components/FormInput"
import Button from "../../components/Button"

const Dashboard = props => {
  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if (token) {
    }
  }, [])

  return (
    <div className={styles.admin}>
      <div className={styles.admin__login}>
        <span className={styles.admin__title}>Dashboard</span>
        <form className={styles.admin__form}>
          <FormInput label="Name" />
          <FormInput label="Password" />
          <Button
            label="Log In"
            type="submit"
            className={styles.login__button}
          />
        </form>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard