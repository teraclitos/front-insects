import React, { useEffect, useState, useRef } from 'react'
import '../css/app.css'
import { useCart } from '../hooks/useCart'

const PhotoDetailUser = ({ dataOnePhoto }) => {
  const { addToCart, removeFromCart, cart } = useCart()
  const [itemsArrayPosition, setItemsArrayPosition] = useState(0)
  const idItem = useRef(0)
  const [zoomed, setZoomed] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const handleZoomToggle = () => {
    setZoomed(!zoomed)
  }
  const handleMouseMove = (e) => {
    if (!zoomed) return
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setPosition({ x, y })
  }

  const handleitemsArrayPosition = (event) => {
    setItemsArrayPosition(event.target.selectedIndex)
    idItem.current = dataOnePhoto.items[event.target.selectedIndex].id
  }
  useEffect(() => {
    idItem.current = dataOnePhoto?.items?.[0]?.id
  }, [dataOnePhoto])
  return (
    <div className='photo-detail-user-container'>
      <div className={`image-zoom ${zoomed ? 'zoomed' : ''}`}>
        <div className='zoom-container' onMouseEnter={handleZoomToggle} onMouseLeave={handleZoomToggle} onMouseMove={handleMouseMove}>
          {dataOnePhoto?.photos_URL[0]?.url ? <img src={dataOnePhoto.photos_URL[0].url} alt={dataOnePhoto.description} /> : 'loading'}
          {zoomed && (
            <div
              className='zoom-preview'
              style={{
                backgroundImage: `url(${dataOnePhoto.photos_URL[0].url})`,
                backgroundPosition: `${position.x}% ${position.y}%`

              }}
            />
          )}
        </div>
      </div>
      <div className='photo-detail-user-information'>
        <h2>{dataOnePhoto.artistName}</h2>
        <h2><span>$</span>{dataOnePhoto?.items?.[itemsArrayPosition]?.price}</h2>
        <div className='input-sizes-container'>
          <label htmlFor='sizesSelect'>Select image size</label>
          <select onChange={handleitemsArrayPosition} id='sizesSelect' name='sizes'>
            {dataOnePhoto.items.map((item, index) => (<option value={`${item.size.width}x${item.size.height}`} key={`sizenumber${index}`}>{`${item.size.width} x ${item.size.height} inches`}</option>))}
          </select>
        </div>
        <p>{dataOnePhoto.description}</p>
        <button
          onClick={() => {
            addToCart({
              ...dataOnePhoto.items[itemsArrayPosition],
              quantity: 0,
              photo: dataOnePhoto.photos_URL[0].url,
              artistName: dataOnePhoto.artistName
            })
          }} type='button'
        >ADD TO CART
        </button>
      </div>

    </div>
  )
}

export default PhotoDetailUser
