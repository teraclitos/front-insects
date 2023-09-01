import { useState } from 'react'
import { useDataOnePhoto } from './useDataOnePhoto'

export const usePhoto = (operation) => {
  const isOperationCreate = operation === 'create'

  const { dataOnePhoto } = useDataOnePhoto()

  const {
    scientificName,
    artistName,
    description,
    pricesSizes: sizesPricesArrayInitialState
  } = dataOnePhoto

  const [photoFields, setPhotoFields] = useState(

    isOperationCreate

      ? [
          { scientificName: '', error: 'El campo scientificName está vacío' },
          { artistName: '', error: 'El campo artisName está vacío' },
          { description: '', error: 'El campo description está vacío' }

        ]
      : [
          { scientificName, error: '' },
          { artistName, error: '' },
          { description, error: '' }

        ]
  )
  const [sizesPrices, setSizesPrices] = useState({ size: { width: '', height: '' }, price: '' })
  const [sizesPricesArray, setSizesPricesArray] = useState(isOperationCreate ? [] : sizesPricesArrayInitialState
  )
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
    sizesPrices,
    sizesPricesArray,
    firstInputCheck,
    setPhotoFields,
    setSizesPrices,
    setSizesPricesArray,
    setFirstInputCheck
  }
}
