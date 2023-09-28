import React from 'react'
import { itemsArrayDeleteOneFunction } from '../services/photosCreateModify'
import Button from './Buttons'
import '../css/app.css'
const TableItems = ({ itemsArray, setItemsArray }) => {
  const handlesItemsArrayDeleteOne = (i, itemsArray, setItemsArray) => {
    setItemsArray(itemsArrayDeleteOneFunction(i, itemsArray))
  }
  const paddingButton = '0.25em 0.5em'
  return (
    <table className='table-bio'>
      <thead>
        <tr>
          <th className='invisible border-0' />
          <th className='invisible border-0' />
          <th colSpan={2}>Size</th>
        </tr>
        <tr>
          <th>ID</th>
          <th>Price</th>
          <th>Width</th>
          <th>Height</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
              itemsArray.map((field, index) => (
                <tr key={`row${index}`}>
                  <td>
                    {index + 1}
                  </td>
                  <td>
                    {field?.price}
                  </td>
                  <td>
                    {field?.size?.width}
                  </td>
                  <td>
                    {field?.size?.height}
                  </td>
                  <td>
                    <Button typeButton='button' paddingButton={paddingButton} clickFunction={() => { handlesItemsArrayDeleteOne(index, itemsArray, setItemsArray) }} type='button'>Delete</Button>
                  </td>
                </tr>))
}
      </tbody>
    </table>
  )
}

export default TableItems
