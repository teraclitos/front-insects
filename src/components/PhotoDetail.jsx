import React from 'react'
import FormPhoto from './FormPhoto'
import { usePhoto } from '../hooks/usePhoto'
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
    setFirstInputCheck
  } = usePhoto(operation)
  return (
    <div><FormPhoto
      photoFields={photoFields}
      sizesPrices={sizesPrices}
      sizesPricesArray={sizesPricesArray}
      firstInputCheck={firstInputCheck}
      setPhotoFields={setPhotoFields}
      setSizesPrices={setSizesPrices}
      setSizesPricesArray={setSizesPricesArray}
      setFirstInputCheck={setFirstInputCheck}
      operation={operation}
         />
    </div>
  )
}

export default PhotoDetail
