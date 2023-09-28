import React, { useContext, useEffect, useState } from 'react'
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
import Spinner from './Spinner'
import { LoaderButtonContext } from '../context/loaderButton'
import { useNavigate } from 'react-router-dom'
import Button from './Buttons'
import '../css/app.css'
import { useHTTPRequestsResultsUpdateCreate } from '../hooks/useHTTPRequestUpdateCreate'
import { Col, Row, Container } from 'react-bootstrap'
import { URLContext } from '../context/url'
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
  const { URL } = useContext(URLContext)
  const { setCreate, setUpdate, setError } = useHTTPRequestsResultsUpdateCreate()
  const navigation = useNavigate()
  const { loaderButton, setLoaderButton } = useContext(LoaderButtonContext)
  const paddingButton = '0.5em 1em'
  const { token } = useContext(TokenContext)
  const { login, setLogin } = useContext(LoginContext)
  const [isUpdateLoading, setIsUpdateLoading] = useState(false)
  const [isDeleteLoading, setIsDeleteLoading] = useState(false)
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
    setLoaderButton(true)

    if (operation === 'create') {
      createPhoto(data, token, URL).then(res => { setLoaderButton(false); setCreate(true) }).catch(error => { setLoaderButton(false); setUpdate(false); setError(error.response.data.msg) })
    } else {
      setIsUpdateLoading(true)
      updatePhoto(data, token, id, URL).then(res => { setLoaderButton(false); setUpdate(true) }).catch(error => { setLoaderButton(false); setCreate(false); setError(error.response.data.msg) }).finally(() => {
        setIsUpdateLoading(false)
      })
    }
  }
  const handleDeletePhoto = () => {
    setLoaderButton(true)
    setIsDeleteLoading(true)
    deletePhoto(token, id, URL).then(res => console.log('foto eliminada')).catch(error => console.log(error.response.data.msg)).finally(() => {
      setLoaderButton(false); setIsDeleteLoading(false); navigation('/')
    })
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
    <form className='form-put form-create' onSubmit={handlePhoto}>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <div>
              <label htmlFor='nombre-cientifico'>Scientfic name</label>
              <input className='form-input' value={photoFields[0].scientificName} onBlur={handleActivateError} onChange={handleChangeFieldCreate} id='nombre-cientifico' name='scientificName' type='text' />
              {firstInputCheck[0].scientificName && <div className='error'>{photoFields[0].error}</div>}
            </div>
            <div>
              <label htmlFor='nombre-artistico'>Artistic name</label>
              <input className='form-input' value={photoFields[1].artistName} onBlur={handleActivateError} onChange={handleChangeFieldCreate} id='nombre-artistico' name='artistName' type='text' />
              {firstInputCheck[1].artistName && <div className='error'>{photoFields[1].error}</div>}
            </div>
            <div>
              <label htmlFor='fotos'>Photos</label>
              <input accept='.jpg,.jpeg,.png' id='fotos' name='images' type='file' multiple />
            </div>

          </Col>
          <Col md={6} sm={12}>

            <WidthHeightInputs
              items={items}
              setItems={setItems}
              itemsArray={itemsArray}
              setItemsArray={setItemsArray}
            />
          </Col>
          <Col sm={{ span: 12, offset: 0 }} md={{ span: 6, offset: 6 }} className='d-flex justify-content-center  mt-4'>
            {itemsArray.length > 0 &&
              <TableItems
                itemsArray={itemsArray}
                setItemsArray={setItemsArray}
              />}
          </Col>
          <Col className=' d-flex justify-content-center px-5 mt-3' sm={12}>
            <div className='w-100'>
              <label htmlFor='descripcion'>Description</label>
              <textarea className='w-100' value={photoFields[2].description} onBlur={handleActivateError} onChange={handleChangeFieldCreate} id='descripcion' name='description' type='text' />
              {firstInputCheck[2].description && <div className='error'>{photoFields[2].error}</div>}
            </div>
          </Col>
          <Col sm={12}>
            <div className='d-flex justify-content-center mt-3 gap-2 '>
              <Button typeButton='submit' paddingButton={paddingButton}>
                {loaderButton && !isDeleteLoading ? <Spinner /> : <> {operation === 'create' ? 'Create' : 'Update'}</>}
              </Button>
              {operation !== 'create' && <Button typeButton='button' paddingButton={paddingButton} clickFunction={handleDeletePhoto}>{loaderButton && !isUpdateLoading ? <Spinner /> : 'Delete'}</Button>}
            </div>
          </Col>
        </Row>
      </Container>
    </form>
  )
}

export default FormPhoto
