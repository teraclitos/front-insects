import { useContext } from 'react'
import { PageContext } from '../context/page'
import '../css/app.css'

const Pagination = ({ totalPages }) => {
  const paginationArray = Array.from({ length: totalPages })
  const { setPage, page } = useContext(PageContext)

  return (
    <div className='pagination-container'>
      <div className='pagination'>
        <button disabled={page === 1} onClick={() => { setPage((prev) => { return prev - 1 }) }}>Previous</button>
        {paginationArray.map((_, i) => (<button className={(page === i + 1) ? 'active' : ''} onClick={() => { setPage(i + 1) }} key={i}>{i + 1}</button>))}
        <button disabled={page === totalPages} onClick={() => { setPage((prev) => { return prev + 1 }) }}>Next</button>
      </div>
    </div>

  )
}

export default Pagination
