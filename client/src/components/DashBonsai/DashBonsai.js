import React, {useEffect} from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "./DashBonsai.module.css"

const DashBonsai = ({match, fetchBonsais, bonsais}) => {
  useEffect(() => {
    fetchBonsais()
  }, [])

  return (
    <div className={styles.dashboard__container}>
      <Link to={`${match.path}/form`} className={styles.bonsai__create}>
        Create
      </Link>
      <div className={styles.table__container}>
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
          <tbody>
            {bonsais.map(bonsai => (
              <tr key={bonsai.name}>
                <td>{bonsai.id}</td>
                <td>{bonsai.name}</td>
                <td>{bonsai.description}</td>
                <td>{bonsai.type}</td>
                <td>{bonsai.size}</td>
                <td>{bonsai.age}</td>
                <td>{bonsai.price}</td>
                <td>{bonsai.created_at}</td>
                <td>{bonsai.updated_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

DashBonsai.propTypes = {
  match: PropTypes.object.isRequired,
}

export default DashBonsai
