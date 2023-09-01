import React, { useEffect } from 'react'
import {
  sizesPricesFunction,
  sizesPricesArrayFunction,
  activateErrorFunction,
  checkIfThereIsAnyErrorFunction,
  changeFieldFunction,
  sizesPricesArrayDeleteOneFunction
} from '../services/photosCreateModify'
import { createPhoto } from '../services/photos'

const FormPhoto = ({
  photoFields,
  sizesPrices,
  sizesPricesArray,
  firstInputCheck,
  setPhotoFields,
  setSizesPrices,
  setSizesPricesArray,
  setFirstInputCheck,
  operation
}) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDE2NmU3MTJkYmU2YTg4MGFhYzBkNCIsInJvbGUiOiJhZG1pbmJpb2xvZ2ljdGhleWxoYXJkIiwiaWF0IjoxNjkzNTcyNTUyLCJleHAiOjE2OTM2MTU3NTJ9.LAVLzpQeQLpncPDincTvByrtdffQicEkRfK2MrIJgus'

  const handleSizesPrices = (event) => {
    setSizesPrices(sizesPricesFunction(event, sizesPrices))
  }
  const handleSizesPriceArray = () => {
    setSizesPricesArray(sizesPricesArrayFunction(sizesPricesArray, sizesPrices))
    setSizesPrices({ size: { width: '', height: '' }, price: '' })
  }
  const handleActivateError = (event) => {
    setFirstInputCheck(activateErrorFunction(event, firstInputCheck))
  }
  const handlesSizesPriceArrayDeleteOne = (i) => {
    setSizesPricesArray(sizesPricesArrayDeleteOneFunction(i, sizesPricesArray))
  }
  const handleChangeFieldCreate = (event) => {
    setPhotoFields(changeFieldFunction(event, photoFields))
  }
  const handlePhoto = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const files = data.getAll('images')

    if (files.length < 2) {
      console.log('debe mandar al menos dos imagenes')
      return
    }

    if (sizesPricesArray.length < 1) {
      console.log('debe mandar los datos del tamaño y precio')
      return
    }

    data.append('pricesSizes', JSON.stringify(sizesPricesArray))

    if (checkIfThereIsAnyErrorFunction(photoFields)) {
      const newFirstInputCheck = firstInputCheck.map((field, i) => {
        const keyField = Object.keys(field)[0]
        const newField = { }
        newField[keyField] = true
        return newField
      })
      setFirstInputCheck(newFirstInputCheck)
      console.log('Debe completar correctamente todos los campos obligatorios')
      return
    }

    if (operation === 'create') {
      createPhoto(data, token).then(res => console.log('foto creada')).catch(error => console.log(error.response.data.msg)).finally(() => {
      })
    }
  }
  const handleSizesPriceArrayClean = () => {
    setSizesPricesArray([])
  }
  useEffect(() => {
    console.log(photoFields)
  }, [photoFields])
  return (
    <form className='form-put' onSubmit={handlePhoto}>
      <div>
        <label htmlFor='nombre-cientifico'>nombre cientifico</label>
        <input value={photoFields[0].scientificName} onBlur={handleActivateError} onChange={handleChangeFieldCreate} id='nombre-cientifico' name='scientificName' type='text' />
        {firstInputCheck[0].scientificName && <div className='error'>{photoFields[0].error}</div>}
      </div>
      <div>
        <label htmlFor='nombre-artistico'>nombre artistico</label>
        <input value={photoFields[1].artistName} onBlur={handleActivateError} onChange={handleChangeFieldCreate} id='nombre-artistico' name='artistName' type='text' />
        {firstInputCheck[1].artistName && <div className='error'>{photoFields[1].error}</div>}
      </div>
      <div>
        <label htmlFor='fotos'>fotos</label>
        <input id='fotos' name='images' type='file' multiple />
      </div>
      <div>
        <label htmlFor='descripcion'>descripcion</label>
        <textarea value={photoFields[2].description} onBlur={handleActivateError} onChange={handleChangeFieldCreate} id='descripcion' name='description' type='text' />
        {firstInputCheck[2].description && <div className='error'>{photoFields[2].error}</div>}
      </div>
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
      {sizesPricesArray.length > 0 &&
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
        </table>}
      <div>
        <button>
          crear
        </button>
      </div>

    </form>
  )
}

export default FormPhoto
