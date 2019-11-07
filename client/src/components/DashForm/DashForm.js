import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import styles from "./DashForm.module.css"
import FormInput from "../FormInput"
import FormTextarea from "../FormTextarea"
import Button from "../Button"
import DragAndDrop from "../DragAndDrop"
import retrieve from "../../utilities/retrieve"

const DashForm = ({createBonsai, location}) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [age, setAge] = useState(null)
  const [type, setType] = useState(null)
  const [size, setSize] = useState(null)
  const [price, setPrice] = useState(null)
  const [images, setImages] = useState([])

  useEffect(() => {
    if (location.state) {
      const {bonsai} = location.state
      setName(bonsai.name)
      setDescription(bonsai.description)
      setAge(bonsai.age)
      setType(bonsai.type)
      setSize(bonsai.size)
      setPrice(bonsai.price)
      setImages(bonsai.images)
    }
  }, [])

  const update = fn => e => fn(e.target.value)

  const handleDrop = files => {
    if (images.length === 4) return
    setImages(images.concat(...files))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const data = new FormData()
    images.forEach(image => {
      typeof image === "object" && data.append("file", image)
      console.log("Image file", image)
    })
    console.log("DDDDDD", data.entries().next().done)
    let newBonsai
    console.log("Loc bons:", location.state)
    if (location.state) {
      const {id} = location.state.bonsai
      // Update the bonsai
      newBonsai = await retrieve(`/api/bonsai/${id}`, "POST", {
        name,
        description,
        age,
        type,
        size,
        price,
      })
    } else {
      newBonsai = await retrieve("/api/bonsai/", "POST", {
        name,
        description,
        age,
        type,
        size,
        price,
      })
      console.log("NEW BONSAI:", newBonsai)
    }
    if (!data.entries().next().done) {
      fetch(`/api/bonsai/upload_images/${newBonsai.id}`, {
        method: "POST",
        body: data,
      })
        .then(res => console.log("IGGM:", res))
        .catch(err => console.log("WOW", err))
    }
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
              src={
                typeof image === "string" ? image : URL.createObjectURL(image)
              }
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
