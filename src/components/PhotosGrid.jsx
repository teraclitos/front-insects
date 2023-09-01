import React from 'react'
import Photo from './Photo'
import { useDataAllPhotos } from '../hooks/useDataAllPhotos'
const PhotosGrid = () => {
  const { dataAllPhotos } = useDataAllPhotos()
  return (
    <section>
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
