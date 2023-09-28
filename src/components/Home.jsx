import React from 'react'
import Hero from './Hero'
import PhotosGrid from './PhotosGrid'
import Pagination from './pagination'
import '../css/app.css'

const Home = ({ dataAllPhotos, totalPages }) => {
  return (
    <div className='home'>
      <Hero />
      <PhotosGrid dataAllPhotos={dataAllPhotos} />
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  )
}

export default Home
