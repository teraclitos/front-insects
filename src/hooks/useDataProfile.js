import { useContext, useEffect, useState } from 'react'
import { getProfile } from '../services/profile'
import { LoaderContext } from '../context/loader'
import { URLContext } from '../context/url'

export const useDataProfile = () => {
  const { setLoader } = useContext(LoaderContext)
  const { URL } = useContext(URLContext)
  const [dataProfile, setDataProfile] = useState([])

  useEffect(() => {
    getProfile(URL).then(data => setDataProfile(data)).catch((error) => { console.log(error.response.data.msg) }).finally(() => {
      setTimeout(() => {
        setLoader(false)
      }, 500)
    })
  }, [])

  return { dataProfile }
}
