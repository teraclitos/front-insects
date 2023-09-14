import { useState, useEffect } from 'react'
import { useDataOnePhoto } from './useDataOnePhoto'

export const usePhoto = (operation) => {
  const isOperationCreate = operation === 'create'

  const { dataOnePhoto, id } = useDataOnePhoto()
  const {
    scientificName,
    artistName,
    description,
    items: itemsArrayInitialState
  } = dataOnePhoto

  const [photoFields, setPhotoFields] = useState(

    [
      { scientificName: '', error: 'El campo scientificName está vacío' },
      { artistName: '', error: 'El campo artisName está vacío' },
      { description: '', error: 'El campo description está vacío' }

    ]

  )
  const [items, setItems] = useState({ size: { width: '', height: '' }, price: '' })
  const [itemsArray, setItemsArray] = useState([])

  useEffect(() => {
    if (!isOperationCreate) {
      setPhotoFields([
        { scientificName, error: '' },
        { artistName, error: '' },
        { description, error: '' }

      ])
      setItemsArray(itemsArrayInitialState)
    }
  }, [dataOnePhoto])
  const [firstInputCheck, setFirstInputCheck] = useState(
    [
      { scientificName: false },
      { artistName: false },
      { description: false },
      { price: false },
      { width: false },
      { height: false }
    ]
  )
  return {
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

  }
}
