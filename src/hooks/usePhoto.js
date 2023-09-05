import { useState, useEffect } from 'react'
import { useDataOnePhoto } from './useDataOnePhoto'

export const usePhoto = (operation) => {
  const isOperationCreate = operation === 'create'

  const { dataOnePhoto, id } = useDataOnePhoto()
  const {
    scientificName,
    artistName,
    description,
    pricesSizes: sizesPricesArrayInitialState
  } = dataOnePhoto

  const [photoFields, setPhotoFields] = useState(

    [
      { scientificName: '', error: 'El campo scientificName está vacío' },
      { artistName: '', error: 'El campo artisName está vacío' },
      { description: '', error: 'El campo description está vacío' }

    ]

  )
  const [sizesPrices, setSizesPrices] = useState({ size: { width: '', height: '' }, price: '' })
  const [sizesPricesArray, setSizesPricesArray] = useState([])

  useEffect(() => {
    if (!isOperationCreate) {
      setPhotoFields([
        { scientificName, error: '' },
        { artistName, error: '' },
        { description, error: '' }

      ])
      setSizesPricesArray(sizesPricesArrayInitialState)
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
    sizesPrices,
    sizesPricesArray,
    firstInputCheck,
    setPhotoFields,
    setSizesPrices,
    setSizesPricesArray,
    setFirstInputCheck,
    id,
    dataOnePhoto

  }
}
