import React from 'react'
import Photo from './Photo'
import '../css/app.css'
import { useDataAllPhotos } from '../hooks/useDataAllPhotos'
const PhotosGrid = () => {
  const { dataAllPhotos } = useDataAllPhotos()
  return (
    <section className='grid-card'>
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
