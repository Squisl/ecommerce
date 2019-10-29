import React, {useState} from "react"
import PropTypes from "prop-types"
import styles from "./DashForm.module.css"
import FormInput from "../FormInput"
import FormTextarea from "../FormTextarea"
import Button from "../Button"

const DashForm = ({createBonsai}) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [age, setAge] = useState(null)
  const [type, setType] = useState(null)
  const [size, setSize] = useState(null)
  const [price, setPrice] = useState(null)

  const update = fn => e => fn(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    createBonsai({
      name,
      description,
      type,
      size,
      price: parseInt(price),
    })
  }

  return (
    <div className={styles.dash__form__container}>
      <form className={styles.dash__form} onSubmit={handleSubmit}>
        <FormInput label="Name" value={name} onChange={update(setName)} />
        <FormTextarea
          label="Description"
          value={description}
          onChange={update(setDescription)}
        />
        <FormInput
          label="Age"
          type="number"
          value={age}
          onChange={update(setAge)}
        />
        <FormInput label="Type" value={type} onChange={update(setType)} />
        <FormInput label="Size" value={size} onChange={update(setSize)} />
        <FormInput
          label="Price"
          type="number"
          value={price}
          onChange={update(setPrice)}
        />
        <Button
          label="Save"
          type="submit"
          className={styles.dash__form__button}
        />
      </form>
    </div>
  )
}

DashForm.propTypes = {}

export default DashForm
