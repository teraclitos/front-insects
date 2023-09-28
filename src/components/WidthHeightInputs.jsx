import React from 'react'
import { itemsFunction, itemsArrayFunction } from '../services/photosCreateModify'
import Button from './Buttons'
import '../css/app.css'

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
  const paddingButton = '0.25em 0.5em'
  const typeButton = 'button'

  return (
    <div>
      <div>
        <label htmlFor='widthinput'>Width</label>
        <input name='width' value={items.size.width} onChange={handleitems} id='widthinput' type='number' />
      </div>
      <div>
        <label htmlFor='heightinput'>Height</label>
        <input name='height' value={items.size.height} onChange={handleitems} id='heightinput' type='number' />
      </div>
      <div>
        <label htmlFor='priceinput'>Prize</label>
        <input name='price' value={items.price} onChange={handleitems} id='priceinput' type='number' />
      </div>
      <div className='d-flex justify-content-center gap-2 mt-3'>
        <Button paddingButton={paddingButton} clickFunction={handleItemsArray} typeButton={typeButton}>Add </Button>
        <Button paddingButton={paddingButton} clickFunction={handleItemsArrayClean} typeButton={typeButton}>Clean</Button>
      </div>
    </div>
  )
}

export default WidthHeightInputs
