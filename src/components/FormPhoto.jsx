import React, { useContext, useEffect } from 'react'
import {
  activateErrorFunction,
  checkIfThereIsAnyErrorFunction,
  changeFieldFunction

} from '../services/photosCreateModify'
import TableSizesPrices from './TableSizesPrices'
import { createPhoto, updatePhoto, deletePhoto } from '../services/photos'
import WidthHeightInputs from './WidthHeightInputs'
import { LoginContext } from '../context/login'

const FormPhoto = ({
  photoFields,
  sizesPrices,
  sizesPricesArray,
  firstInputCheck,
  setPhotoFields,
  setSizesPrices,
  setSizesPricesArray,
  setFirstInputCheck,
  operation,
  id
}) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDE2NmU3MTJkYmU2YTg4MGFhYzBkNCIsInJvbGUiOiJhZG1pbmJpb2xvZ2ljdGhleWxoYXJkIiwiaWF0IjoxNjkzODMyODUxLCJleHAiOjE2OTM4NzYwNTF9.1x-A0rv6IFQayq3Org2hA0WarcoNt0LqsX-Z7BvumIs'
  const { login, setLogin } = useContext(LoginContext)

  const handleActivateError = (event) => {
    setFirstInputCheck(activateErrorFunction(event, firstInputCheck))
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
    } else {
      updatePhoto(data, token, id).then(res => console.log('foto modificada')).catch(error => console.log(error.response.data.msg))
    }
  }
  const handleDeletePhoto = () => {
    deletePhoto(token, id).then(res => console.log('foto eliminada')).catch(error => console.log(error.response.data.msg))
  }
  useEffect(() => {
    if (operation === 'create') {
      if (login) {
        alert('succesful login')
        setLogin(false)
      }
    }
  }, [])
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
      <WidthHeightInputs
        sizesPrices={sizesPrices}
        setSizesPrices={setSizesPrices}
        sizesPricesArray={sizesPricesArray}
        setSizesPricesArray={setSizesPricesArray}
      />

      {sizesPricesArray.length > 0 &&
        <TableSizesPrices
          sizesPricesArray={sizesPricesArray}
          setSizesPricesArray={setSizesPricesArray}
        />}
      <div>
        <button>
          {operation === 'create' ? 'create' : 'update'}
        </button>
        {operation !== 'create' && <button onClick={handleDeletePhoto} type='button'>delete</button>}
      </div>

    </form>
  )
}

export default FormPhoto
