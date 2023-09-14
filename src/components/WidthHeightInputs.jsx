import React from 'react'
import { itemsFunction, itemsArrayFunction } from '../services/photosCreateModify'

const WidthHeightInputs = ({ items, setItems, setItemsArray, itemsArray }) => {
  const handleitems = (event) => {
    setItems(itemsFunction(event, items))
  }
  const handleItemsArray = () => {
    setItemsArray(itemsArrayFunction(itemsArray, items))
    setItems({ size: { width: '', height: '' }, price: '' })
  }
  const handleItemsArrayClean = () => {
    setItemsArray([])
  }

  return (
    <div>
      <div>
        <label htmlFor='widthinput'>width</label>
        <input name='width' value={items.size.width} onChange={handleitems} id='widthinput' type='number' />
      </div>
      <div>
        <label htmlFor='heightinput'>height</label>
        <input name='height' value={items.size.height} onChange={handleitems} id='heightinput' type='number' />
      </div>
      <div>
        <label htmlFor='priceinput'>prize</label>
        <input name='price' value={items.price} onChange={handleitems} id='priceinput' type='number' />
      </div>
      <button onClick={handleItemsArray} type='button'>añadir </button>
      <button onClick={handleItemsArrayClean} type='button'>limpiar</button>
    </div>
  )
}

export default WidthHeightInputs
