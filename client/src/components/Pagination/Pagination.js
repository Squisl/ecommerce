import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import styles from "./Pagination.module.css"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

const LEFT_PAGE = "LEFT"
const RIGHT_PAGE = "RIGHT"

const range = (from, to, step = 1) => {
  let i = from
  const range = []

  while (i <= to) {
    range.push(i)
    i += step
  }

  return range
}

const Pagination = ({
  totalRecords = null,
  pageLimit = 8,
  pageNeighbours = 1,
  onPageChanged,
}) => {
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    goToPage(1)
  }, [])

  const totalPages = Math.ceil(totalRecords / pageLimit)

  const goToPage = page => {
    console.log("Going to...")
    const currentPage = Math.max(0, Math.min(page, totalPages))

    const paginationData = {
      currentPage,
      totalPages: totalPages,
      pageLimit: pageLimit,
      totalRecords: totalRecords,
    }

    setCurrentPage(currentPage)
    onPageChanged(paginationData)
  }

  const handleClick = page => e => {
    e.preventDefault()
    goToPage(page)
  }

  const handleMoveLeft = e => {
    e.preventDefault()
    goToPage(currentPage - pageNeighbours * 2 - 1)
  }

  const handleMoveRight = e => {
    e.preventDefault()
    goToPage(currentPage + pageNeighbours * 2 + 1)
  }

  const fetchPageNumbers = () => {
    // Total page numbers to show on the control
    const totalNumbers = pageNeighbours * 2 + 3
    // To cover for the left and right controls
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours)
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours)

      let pages = range(startPage, endPage)

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2
      const hasRightSpill = totalPages - endPage > 1
      const spillOffset = totalNumbers - (pages.length + 1)

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1)
          pages = [LEFT_PAGE, ...extraPages, ...pages]
          break
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset)
          pages = [...pages, ...extraPages, RIGHT_PAGE]
          break
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
          break
        }
      }

      return [1, ...pages, totalPages]
    }

    return range(1, totalPages)
  }

  const pages = fetchPageNumbers()

  return (
    <>
      <nav aria-label="Countries Pagination">
        <ul className="pagination">
          {pages.map((page, index) => {
            if (page === LEFT_PAGE)
              return (
                <li key={index} className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Previous"
                    onClick={handleMoveLeft}>
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
              )
            if (page === RIGHT_PAGE)
              return (
                <li key={index} className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Next"
                    onClick={handleMoveRight}>
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              )

            return (
              <li
                key={index}
                className={`page-item${currentPage === page ? " active" : ""}`}>
                <a className="page-link" href="#" onClick={handleClick(page)}>
                  {page}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number.isRequired,
  pageNeighbours: PropTypes.oneOf([0, 1, 2]),
  onPageChanged: PropTypes.func,
}

export default Pagination
