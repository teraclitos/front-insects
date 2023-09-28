import React from 'react'
import Photo from './Photo'
import '../css/app.css'
const PhotosGrid = ({ dataAllPhotos }) => {
  return (
    <section className='grid-card mt-5'>
      {
    dataAllPhotos.map((photo) => (
      <Photo key={photo._id} photo={photo} />
    )
    )
    }
    </section>
  )
}

export default PhotosGrid
