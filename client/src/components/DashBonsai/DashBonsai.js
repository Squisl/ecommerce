import React, {useEffect} from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "./DashBonsai.module.css"
import {MdDeleteForever} from "react-icons/md"
import DeleteModal from "../DeleteModal"

const DashBonsai = ({
  history,
  match,
  fetchBonsais,
  bonsais,
  modal,
  toggleDelete,
  deleteBonsai,
}) => {
  useEffect(() => {
    fetchBonsais()
  }, [])

  const handleRowClick = bonsai => e => {
    history.push({
      pathname: "/dashboard/form",
      state: {bonsai},
    })
    console.log(bonsai)
  }

  const handleDeleteClick = e => {
    e.stopPropagation()
    toggleDelete()
  }

  const handleDeleteBonsai = bonsai_id => () => deleteBonsai(bonsai_id)

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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bonsais.map(bonsai => (
              <>
                <tr key={bonsai.name} onClick={handleRowClick(bonsai)}>
                  <td>{bonsai.id}</td>
                  <td>{bonsai.name}</td>
                  <td>{bonsai.description}</td>
                  <td>{bonsai.type}</td>
                  <td>{bonsai.size}</td>
                  <td>{bonsai.age}</td>
                  <td>{bonsai.price}</td>
                  <td>{bonsai.created_at}</td>
                  <td>{bonsai.updated_at}</td>
                  <td>
                    <MdDeleteForever onClick={handleDeleteClick} />
                  </td>
                </tr>
                {modal.delete && (
                  <DeleteModal
                    toggle={toggleDelete}
                    del={handleDeleteBonsai(bonsai.id)}
                  />
                )}
              </>
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
