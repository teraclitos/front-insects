import { useEffect, useState } from 'react'
import { getOnePhoto } from '../services/photos'
import { useParams } from 'react-router-dom'

export const useDataOnePhoto = () => {
  const [dataOnePhoto, setDataOnePhoto] = useState({
    scientificName: '',
    artistName: '',
    description: '',
    pricesSizes: []
  })
  const { id } = useParams() || false
  useEffect(() => {
    if (id) {
      getOnePhoto(id).then(data => setDataOnePhoto(data)).catch((error) => { console.log(error.response.data.msg) })
    }
  }, [])

  return { dataOnePhoto, setDataOnePhoto }
}
