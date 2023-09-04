import React from 'react'
import { sizesPricesArrayDeleteOneFunction } from '../services/photosCreateModify'

const TableSizesPrices = ({ sizesPricesArray, setSizesPricesArray }) => {
  const handlesSizesPriceArrayDeleteOne = (i) => {
    setSizesPricesArray(sizesPricesArrayDeleteOneFunction(i, sizesPricesArray))
  }
  return (
    <table>
      <thead>
        <tr>
          <th />
          <th colSpan={2}>size</th>
          <th colSpan={2} />
        </tr>
        <tr>
          <th>id</th>
          <th>width</th>
          <th>height</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {
              sizesPricesArray.map((field, index) => (
                <tr key={`row${index}`}>
                  <td>
                    {index + 1}
                  </td>
                  <td>
                    {field?.size?.width}
                  </td>
                  <td>
                    {field?.size?.height}
                  </td>
                  <td>
                    {field?.price}
                  </td>
                  <td>
                    <button type='button' onClick={() => { handlesSizesPriceArrayDeleteOne(index) }}>eliminar</button>
                  </td>
                </tr>))
}
      </tbody>
    </table>
  )
}

export default TableSizesPrices
