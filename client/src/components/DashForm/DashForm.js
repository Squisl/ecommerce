import React, {useState} from "react"
import PropTypes from "prop-types"
import styles from "./DashForm.module.css"
import FormInput from "../FormInput"
import FormTextarea from "../FormTextarea"
import Button from "../Button"
import DragAndDrop from "../DragAndDrop"

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
    setImages(images.concat(...files))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const data = new FormData()
    images.forEach(image => {
      data.append("file", image)
      console.log("Image file", image)
    })
    console.log("DAAATTAAA", data)
    for (let entry of data.entries()) {
      console.log("ENTRYY", entry)
    }
    createBonsai({
      name,
      description,
      age,
      type,
      size,
      price,
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
      <DragAndDrop drop={handleDrop}>
        <div style={{height: 300, width: 250, border: "1px solid white"}}>
          {images.map(image => (
            <img
              key={image.name}
              style={{width: "2em"}}
              src={URL.createObjectURL(image)}
            />
          ))}
        </div>
      </DragAndDrop>
      <button onClick={() => console.log(images)}>
        Console log the images
      </button>
    </div>
  )
}

DashForm.propTypes = {
  createBonsai: PropTypes.func.isRequired,
}

export default DashForm
