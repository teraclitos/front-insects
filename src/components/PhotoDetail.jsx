import React, { useContext } from 'react'
import FormPhoto from './FormPhoto'
import { usePhoto } from '../hooks/usePhoto'
import { TokenContext } from '../context/token'
import PhotoDetailUser from './PhotoDetailUser'
import Loader from './Loader'
import { LoaderContext } from '../context/loader'
import '../css/app.css'

const PhotoDetail = () => {
  const operation = 'update'

  const {
    photoFields,
    items,
    itemsArray,
    firstInputCheck,
    setPhotoFields,
    setItems,
    setItemsArray,
    setFirstInputCheck,
    id,
    dataOnePhoto
  } = usePhoto(operation)

  const { token } = useContext(TokenContext)

  const { loader } = useContext(LoaderContext)

  return (
    <>
      {!loader
        ? <div className='photo-detail mt-5'>
          {token
            ? <FormPhoto
                photoFields={photoFields}
                items={items}
                itemsArray={itemsArray}
                firstInputCheck={firstInputCheck}
                setPhotoFields={setPhotoFields}
                setItems={setItems}
                setItemsArray={setItemsArray}
                setFirstInputCheck={setFirstInputCheck}
                operation={operation}
                id={id}
              />
            : <PhotoDetailUser dataOnePhoto={dataOnePhoto} />}
          </div>
        : <Loader />}
    </>
  )
}

export default PhotoDetail
