import React from "react"
import PropTypes from "prop-types"
import {Link, Route} from "react-router-dom"
import styles from "./DashBonsai.module.css"
import DashForm from "../DashForm"

const DashBonsai = ({match}) => {
  return (
    <div className={styles.dashboard__container}>
      <div className={styles.dashboard__bonsai}>
        <Link to={`${match.path}/form`} className={styles.bonsai__create}>
          Create
        </Link>
        <table className={styles.dashboard__table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Type</th>
              <th>Size</th>
              <th>Age</th>
              <th>Price</th>
              <th>Created</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  )
}

DashBonsai.propTypes = {}

export default DashBonsai
