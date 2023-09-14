import React from 'react'
import FormPhoto from './FormPhoto'
import { usePhoto } from '../hooks/usePhoto'

const CreatePhoto = () => {
  const operation = 'create'
  const {
    photoFields,
    items,
    itemsArray,
    firstInputCheck,
    setPhotoFields,
    setItems,
    setItemsArray,
    setFirstInputCheck
  } = usePhoto(operation)
  return (
    <div><FormPhoto
      photoFields={photoFields}
      items={items}
      itemsArray={itemsArray}
      firstInputCheck={firstInputCheck}
      setPhotoFields={setPhotoFields}
      setItems={setItems}
      setItemsArray={setItemsArray}
      setFirstInputCheck={setFirstInputCheck}
      operation={operation}
         />
    </div>
  )
}

export default CreatePhoto
