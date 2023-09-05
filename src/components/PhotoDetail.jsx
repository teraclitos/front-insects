import React, { useContext } from 'react'
import FormPhoto from './FormPhoto'
import { usePhoto } from '../hooks/usePhoto'
import { TokenContext } from '../context/token'
import PhotoDetailUser from './PhotoDetailUser'

const PhotoDetail = () => {
  const operation = 'update'

  const {
    photoFields,
    sizesPrices,
    sizesPricesArray,
    firstInputCheck,
    setPhotoFields,
    setSizesPrices,
    setSizesPricesArray,
    setFirstInputCheck,
    id,
    dataOnePhoto
  } = usePhoto(operation)

  const { token } = useContext(TokenContext)

  return (
    <div>
      {token
        ? <FormPhoto
            photoFields={photoFields}
            sizesPrices={sizesPrices}
            sizesPricesArray={sizesPricesArray}
            firstInputCheck={firstInputCheck}
            setPhotoFields={setPhotoFields}
            setSizesPrices={setSizesPrices}
            setSizesPricesArray={setSizesPricesArray}
            setFirstInputCheck={setFirstInputCheck}
            operation={operation}
            id={id}

          />
        : <PhotoDetailUser dataOnePhoto={dataOnePhoto} />}
    </div>
  )
}

export default PhotoDetail
