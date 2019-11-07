import React, {useEffect} from "react"
import PropTypes from "prop-types"
import styles from "./Shop.module.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import Pagination from "../../components/Pagination/Pagination"
import ShopGrid from "../../components/ShopGrid/ShopGrid"

const Shop = ({fetchBonsais, bonsais}) => {
  useEffect(() => {
    document.title = "Saisei | Shop"
    fetchBonsais()
  }, [])

  return (
    <div className={styles.shop}>
      <Sidebar />
      <div className={styles.shop__main}>
        <ShopGrid bonsais={bonsais} />
        <Pagination />
      </div>
    </div>
  )
}

Shop.propTypes = {}

export default Shop
