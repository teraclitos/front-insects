import { useContext, useEffect, useState } from 'react'
import { getAllPhotos } from '../services/photos'
import { LoaderContext } from '../context/loader'
import { LoaderButtonContext } from '../context/loaderButton'
import { PageContext } from '../context/page'
import { URLContext } from '../context/url'

export const useDataAllPhotos = () => {
  const { URL } = useContext(URLContext)
  const [totalPages, setTotalPages] = useState(0)
  const { loaderButton } = useContext(LoaderButtonContext)
  const [dataAllPhotos, setDataAllPhotos] = useState([])
  const { setLoader } = useContext(LoaderContext)
  const { page } = useContext(PageContext)

  useEffect(() => {
    getAllPhotos(page, URL).then(data => { setDataAllPhotos(data.docs); setTotalPages(data.totalPages) }).catch((error) => { console.log(error.response.data.msg) }).finally(() => {
      setTimeout(() => {
        setLoader(false)
      }, 500)
    })
  }, [loaderButton, page])
  useEffect(() => {
    setLoader(true)
  }, [page])

  return { dataAllPhotos, totalPages }
}
