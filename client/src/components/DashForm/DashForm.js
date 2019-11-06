import React, {useState} from "react"
import PropTypes from "prop-types"
import styles from "./DashForm.module.css"
import FormInput from "../FormInput"
import FormTextarea from "../FormTextarea"
import Button from "../Button"
import DragAndDrop from "../DragAndDrop"
import retrieve from "../../utilities/retrieve"

const DashForm = ({createBonsai}) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [age, setAge] = useState(null)
  const [type, setType] = useState(null)
  const [size, setSize] = useState(null)
  const [price, setPrice] = useState(null)
  const [images, setImages] = useState([])

  const update = fn => e => fn(e.target.value)

  const handleDrop = files => {
    if (images.length === 4) return
    setImages(images.concat(...files))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const data = new FormData()
    images.forEach(image => {
      data.append("file", image)
      console.log("Image file", image)
    })

    const newBonsai = await retrieve("/api/bonsai/", "POST", {
      name,
      description,
      age,
      type,
      size,
      price,
    })
    console.log("NEW BONSAI:", newBonsai)

    fetch(`/api/bonsai/upload_images/${newBonsai.id}`, {
      method: "POST",
      body: data,
    })
      .then(res => res)
      .catch(err => console.log("WOW", err))
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
      <DragAndDrop drop={handleDrop}>
        <div className={styles.dash__form__images}>
          {images.map(image => (
            <img
              key={image.name}
              className={styles.image__preview}
              src={URL.createObjectURL(image)}
            />
          ))}
        </div>
      </DragAndDrop>
    </div>
  )
}

DashForm.propTypes = {
  createBonsai: PropTypes.func.isRequired,
}

export default DashForm
