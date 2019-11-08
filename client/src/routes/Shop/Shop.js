import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import styles from "./Shop.module.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import Pagination from "../../components/Pagination/Pagination"
import ShopGrid from "../../components/ShopGrid/ShopGrid"
import retrieve from "../../utilities/retrieve"

const Shop = ({fetchBonsais}) => {
  const [bonsais, setBonsais] = useState([])
  const [currentPage, setCurrentPage] = useState(null)
  const [totalPages, setTotalPages] = useState(null)

  useEffect(() => {
    document.title = "Saisei | Shop"
    // fetchBonsais()
    // TODO: get number of all bonsais
  }, [])

  const onPageChanged = async data => {
    const {currentPage, totalPages, pageLimit} = data

    const response = await retrieve(
      `/api/bonsai/page/${currentPage}/limit/${pageLimit}`,
      "GET",
    )
    console.log("Response", response)
    console.log("total", totalPages)

    setTotalPages(totalPages)
    setCurrentPage(currentPage)
    setBonsais(response)
  }

  return (
    <div className={styles.shop}>
      <Sidebar />
      <div className={styles.shop__main}>
        <ShopGrid bonsais={bonsais} />
        <Pagination totalRecords={60} onPageChanged={onPageChanged} />
      </div>
    </div>
  )
}

Shop.propTypes = {}

export default Shop
