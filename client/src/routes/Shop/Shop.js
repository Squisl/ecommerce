import React, {useEffect} from "react"
import PropTypes from "prop-types"
import styles from "./Shop.module.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import Pagination from "../../components/Pagination/Pagination"
import ShopGrid from "../../components/ShopGrid/ShopGrid"

const Shop = props => {
  useEffect(() => {
    document.title = "Saisei | Shop"
  }, [])

  return (
    <div className={styles.shop}>
      <Sidebar />
      <div className={styles.shop__main}>
        <ShopGrid />
        <Pagination />
      </div>
    </div>
  )
}

Shop.propTypes = {}

export default Shop
