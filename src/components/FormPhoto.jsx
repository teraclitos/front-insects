import React, { useContext, useEffect } from 'react'
import {
  activateErrorFunction,
  checkIfThereIsAnyErrorFunction,
  changeFieldFunction

} from '../services/photosCreateModify'
import TableItems from './TableItems'
import { createPhoto, updatePhoto, deletePhoto } from '../services/photos'
import WidthHeightInputs from './WidthHeightInputs'
import { LoginContext } from '../context/login'
import { TokenContext } from '../context/token'

const FormPhoto = ({
  photoFields,
  items,
  itemsArray,
  firstInputCheck,
  setPhotoFields,
  setItems,
  setItemsArray,
  setFirstInputCheck,
  operation,
  id
}) => {
  const { token } = useContext(TokenContext)
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

    if (itemsArray.length < 1) {
      console.log('debe mandar los datos del tamaño y precio')
      return
    }

    data.append('items', JSON.stringify(itemsArray))

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
      createPhoto(data, token).then(res => alert('foto creada')).catch(error => console.log(error.response.data.msg)).finally(() => {
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
        <input accept='.jpg,.jpeg,.png' id='fotos' name='images' type='file' multiple />
      </div>
      <div>
        <label htmlFor='descripcion'>descripcion</label>
        <textarea value={photoFields[2].description} onBlur={handleActivateError} onChange={handleChangeFieldCreate} id='descripcion' name='description' type='text' />
        {firstInputCheck[2].description && <div className='error'>{photoFields[2].error}</div>}
      </div>
      <WidthHeightInputs
        items={items}
        setItems={setItems}
        itemsArray={itemsArray}
        setItemsArray={setItemsArray}
      />

      {itemsArray.length > 0 &&
        <TableItems
          itemsArray={itemsArray}
          setItemsArray={setItemsArray}
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
