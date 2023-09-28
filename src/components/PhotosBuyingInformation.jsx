import React from 'react'
import { useCartAbstraction } from '../hooks/useCartAbstraction'
import Button from './Buttons'

const PhotosBuyingInformation = ({ dataOnePhoto }) => {
  const { addToCart, itemsArrayPosition, handleitemsArrayPosition } = useCartAbstraction()
  return (
    <div className='photo-detail-user-information '>
      <h2>{dataOnePhoto.artistName}</h2>
      <h2><span>$</span>{dataOnePhoto?.items?.[itemsArrayPosition]?.price}</h2>
      <div className='input-sizes-container'>
        <label htmlFor='sizesSelect'>Select image size</label>
        <select onChange={(event) => { handleitemsArrayPosition(event, dataOnePhoto) }} id='sizesSelect' name='sizes'>
          {dataOnePhoto.items.map((item, index) => (<option value={`${item.size.width}x${item.size.height}`} key={`sizenumber${index}`}>{`${item.size.width} x ${item.size.height} inches`}</option>))}
        </select>
      </div>
      <p>{dataOnePhoto.description}</p>
      <Button
        typeButton='button'
        paddingButton='0.5em 2em'
        clickFunction={() => {
          addToCart({
            ...dataOnePhoto.items[itemsArrayPosition],
            quantity: 0,
            photo: dataOnePhoto.photos_URL[0].url,
            artistName: dataOnePhoto.artistName
          })
        }} type='button'
      >ADD TO CART
      </Button>
    </div>
  )
}

export default PhotosBuyingInformation
