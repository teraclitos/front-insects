import React, { useContext, useState } from 'react'

import { Link } from 'react-router-dom'
import '../css/app.css'
import { LoaderContext } from '../context/loader'
const Photo = ({ photo }) => {
  const { setLoader } = useContext(LoaderContext)
  const [opacityMainImage, setOpacityMainImage] = useState(1)
  const [opacitySecondImage, setOpacitySecondImage] = useState(0)

  return (

    <article className='card-main-page d-flex flex-column gap-4 mb-4'>
      <Link onClick={() => { setLoader(true) }} to={`/photo/${photo._id}`}>
        <div
          className='component-hover-receptor'
          onMouseEnter={() => { setOpacityMainImage(0); setOpacitySecondImage(1) }}
          onMouseLeave={() => { setOpacityMainImage(1); setOpacitySecondImage(0) }}
        />
        <img
          style={{ opacity: opacityMainImage }} className='w-100 img-main' loading='lazy' src={photo.photos_URL[0].url} alt={photo.description}
        />
        <img style={{ opacity: opacitySecondImage }} className='w-100 img-hover' loading='lazy' src={photo.photos_URL[1].url} alt={photo.description} />
      </Link>
      <header>
        <h2 className='text-start fs-6 ms-1 mb-1'>{photo.artistName}</h2>

      </header>
    </article>

  )
}

export default Photo
