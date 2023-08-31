import React from 'react'

const Photo = ({ photo }) => {
  return (
    <article>
      <img src={photo.photos_URL[0].url} alt={photo.artistName} />
    </article>
  )
}

export default Photo
