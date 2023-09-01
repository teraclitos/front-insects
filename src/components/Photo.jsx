import React from 'react'
import { Link } from 'react-router-dom'

const Photo = ({ photo }) => {
  return (
    <article>
      <Link to={`/photo/${photo._id}`}>   <img src={photo.photos_URL[0].url} alt={photo.artistName} /></Link>
    </article>
  )
}

export default Photo
