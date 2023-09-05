import React from 'react'

const PhotoDetailUser = ({ dataOnePhoto }) => {
  return (
    <div>
      {dataOnePhoto?.photos_URL[0]?.url ? <img src={dataOnePhoto.photos_URL[0].url} alt={dataOnePhoto.description} /> : 'loading'}
    </div>
  )
}

export default PhotoDetailUser
