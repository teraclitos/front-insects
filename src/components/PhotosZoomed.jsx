import React, { useContext, useState } from 'react'
import { useZoom } from '../hooks/useZoom'
import ModalPhoto from './ModalPhoto'
import { ModalContext } from '../context/modal'

const PhotosZoomed = ({ dataOnePhoto }) => {
  const { zoomed, position, handleMouseMove, handleZoomToggle } = useZoom()
  const [photoIndex, setPhotoIndex] = useState(0)
  const { setModal } = useContext(ModalContext)
  return (
    <div className='d-flex flex-column w-50 gap-4 images-zoomed-container'>
      {dataOnePhoto.photos_URL.map((photo, index) => (
        <div key={`phototobezoomed${index}`} className={`w-100 image-zoom ${zoomed[index] ? 'zoomed' : ''}`}>
          <div className='zoom-container' onClick={() => { setPhotoIndex(index); setModal(true); document.body.style.overflow = 'hidden' }} onMouseEnter={() => { handleZoomToggle(index) }} onMouseLeave={() => { handleZoomToggle(index) }} onMouseMove={(e) => { handleMouseMove(e, index) }}>
            <img className='w-100' src={photo.url} alt={dataOnePhoto.description} />

            {zoomed[index] && (
              <div
                className='zoom-preview'
                style={{
                  backgroundImage: `url(${photo.url})`,
                  backgroundPosition: `${position[index].x}% ${position[index].y}%`

                }}
              />

            )}
          </div>
        </div>))}

      <ModalPhoto photoUrl={dataOnePhoto.photos_URL[photoIndex].url} photoDescription={dataOnePhoto.description} />

    </div>
  )
}

export default PhotosZoomed
