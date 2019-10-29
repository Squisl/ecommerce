import React from "react"
import PropTypes from "prop-types"
import styles from "./Product.module.css"
import ImageViewer from "../../components/ImageViewer"

const Product = props => {
  return (
    <div className={styles.product}>
      <ImageViewer />
      <div className={styles.product__information}>
        <span className={styles.product__title}>Japanese White Pine</span>
        <span className={styles.product__description}>
          Bonsai fig tree (Banyan fig, Ficus retusa) are well suited for styling
          as a Bonsai and is an easy to handle indoor bonsai. The banyan fig
          (botanical Ficus retusa, family Moraceae) is originated in South- and
          Southeast asia. In nature the tree is fast growing up to 15m height.
          At a high air humidity the fig forms many attractive air roots. A
          bright location and regularly watering is the basis for a long life of
          this uncomplicated indoor bonsai. Fig trees bonsai tolerates cutting
          very well. Ficus Bonsai are rarely attacked by pests and disease are
          not vulnerable.
        </span>
        <table className={styles.product__table}>
          <tr>
            <td>
              <b>Age:</b>
            </td>
            <td>18 years</td>
          </tr>
          <tr>
            <td>
              <b>Type:</b>
            </td>
            <td>Indoor</td>
          </tr>
          <tr>
            <td>
              <b>Height:</b>
            </td>
            <td>61cm</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

Product.propTypes = {}

export default Product
