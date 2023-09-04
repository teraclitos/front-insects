import React from 'react'
import { sizesPricesFunction, sizesPricesArrayFunction } from '../services/photosCreateModify'

const WidthHeightInputs = ({ sizesPrices, setSizesPrices, setSizesPricesArray, sizesPricesArray }) => {
  const handleSizesPrices = (event) => {
    setSizesPrices(sizesPricesFunction(event, sizesPrices))
  }
  const handleSizesPriceArray = () => {
    setSizesPricesArray(sizesPricesArrayFunction(sizesPricesArray, sizesPrices))
    setSizesPrices({ size: { width: '', height: '' }, price: '' })
  }
  const handleSizesPriceArrayClean = () => {
    setSizesPricesArray([])
  }

  return (
    <div>
      <div>
        <label htmlFor='widthinput'>width</label>
        <input name='width' value={sizesPrices.size.width} onChange={handleSizesPrices} id='widthinput' type='number' />
      </div>
      <div>
        <label htmlFor='heightinput'>height</label>
        <input name='height' value={sizesPrices.size.height} onChange={handleSizesPrices} id='heightinput' type='number' />
      </div>
      <div>
        <label htmlFor='priceinput'>prize</label>
        <input name='price' value={sizesPrices.price} onChange={handleSizesPrices} id='priceinput' type='number' />
      </div>
      <button onClick={handleSizesPriceArray} type='button'>añadir </button>
      <button onClick={handleSizesPriceArrayClean} type='button'>limpiar</button>
    </div>
  )
}

export default WidthHeightInputs
