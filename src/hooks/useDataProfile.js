import { useEffect, useState } from 'react'
import { getProfile } from '../services/profile'

export const useDataProfile = () => {
  const [dataProfile, setDataProfile] = useState([])

  useEffect(() => {
    getProfile().then(data => setDataProfile(data)).catch((error) => { console.log(error.response.data.msg) })
  }, [])

  return { dataProfile }
}
