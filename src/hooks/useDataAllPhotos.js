import { useEffect, useState } from 'react'
import { getAllPhotos } from '../services/photos'

export const useDataAllPhotos = () => {
  const [dataAllPhotos, setDataAllPhotos] = useState([])
  const page = 1

  useEffect(() => {
    getAllPhotos(page).then(data => setDataAllPhotos(data)).catch((error) => { console.log(error.response.data.msg) })
  }, [])

  return { dataAllPhotos }
}
