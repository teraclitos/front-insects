import React from 'react'
import FormPhoto from './FormPhoto'
import { usePhoto } from '../hooks/usePhoto'

const CreatePhoto = () => {
  const operation = 'create'
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

export default CreatePhoto
