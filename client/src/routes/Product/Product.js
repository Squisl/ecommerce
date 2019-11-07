import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import styles from "./Product.module.css"
import ImageViewer from "../../components/ImageViewer"
import QuantitySelector from "../../components/QuantitySelector"
import Button from "../../components/Button"
import Loading from "../../components/Loading"

const Product = ({match, bonsai: bonsaiState, fetchBonsai}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("Bonsai State", bonsaiState)
    const product_id = match.params.id
    const found = bonsaiState.all.find(bonsai => bonsai.id === product_id)
    if (found) {
      console.log("found", found)
    } else {
      console.log("Fetch Bonsai", product_id)
      fetchBonsai(product_id, setLoading)
    }
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className={styles.product}>
      <ImageViewer images={bonsaiState.selected.images} />
      <div className={styles.product__information}>
        <span className={styles.product__title}>
          {bonsaiState.selected.name}
        </span>
        <span className={styles.product__description}>
          {bonsaiState.selected.description}
        </span>
        <table className={styles.product__table}>
          <tbody>
            <tr>
              <td>
                <b>Age:</b>
              </td>
              <td>{bonsaiState.selected.age} years</td>
            </tr>
            <tr>
              <td>
                <b>Type:</b>
              </td>
              <td>{bonsaiState.selected.type}</td>
            </tr>
            <tr>
              <td>
                <b>Height:</b>
              </td>
              <td>{bonsaiState.selected.size}cm</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.product__row}>
          <QuantitySelector />
          <Button label="Add to Cart" />
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {}

export default Product
