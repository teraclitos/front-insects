import React from 'react'

import { Link } from 'react-router-dom'
import '../css/app.css'
const Photo = ({ photo }) => {
  return (

    <article className='card-main-page'>
      <Link to={`/photo/${photo._id}`}><img src={photo.photos_URL[0].url} alt={photo.description} /></Link>
      <header>
        <h2>{photo.artistName}</h2>
        <h3>{photo.scientificName}</h3>
      </header>
      <main>
        <p>{photo.description}</p>
      </main>
      {/* <footer>
        <button>add</button>
      </footer> */}
    </article>

  )
}

export default Photo
