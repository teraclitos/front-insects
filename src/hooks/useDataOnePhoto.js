import { useContext, useEffect, useState } from 'react'
import { getOnePhoto } from '../services/photos'
import { useParams } from 'react-router-dom'
import { LoaderContext } from '../context/loader'
import { URLContext } from '../context/url'
export const useDataOnePhoto = () => {
  const { URL } = useContext(URLContext)
  const { setLoader } = useContext(LoaderContext)
  const [dataOnePhoto, setDataOnePhoto] = useState({
    scientificName: '',
    artistName: '',
    description: '',
    items: [],
    photos_URL: []
  })

  const { id } = useParams() || false
  useEffect(() => {
    if (id) {
      getOnePhoto(id, URL).then(data => setDataOnePhoto(data)).catch((error) => { console.log(error.response.data.msg) }).finally(() => {
        setTimeout(() => {
          setLoader(false)
        }, 500)
      })
    }
  }, [])

  return { dataOnePhoto, id }
}
