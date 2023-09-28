import { useEffect, useState } from 'react'

export const useHTTPRequestsResultsUpdateCreate = () => {
  const [error, setError] = useState('')
  const [update, setUpdate] = useState(null)
  const [create, setCreate] = useState(null)
  useEffect(() => {
    if (update) {
      setTimeout(() => {
        alert('photo updated correctly')
        setUpdate(null)
      }, 300)
    }
    if (create) {
      setTimeout(() => {
        alert('photo created correctly')
        setCreate(null)
      }, 300)
    }
    if (create === false || update === false) {
      setTimeout(() => {
        alert(error)
        setCreate(null)
        setUpdate(null)
        setError('')
      }, 300)
    }
  }, [update, create])

  return ({ setCreate, setUpdate, setError })
}
