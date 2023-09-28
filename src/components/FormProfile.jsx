import React, { useContext, useState, useEffect } from 'react'
import { TokenContext } from '../context/token'
import { updateProfile as updateProfileFunction } from '../services/profile'
import { LoaderButtonContext } from '../context/loaderButton'
import Spinner from './Spinner'
import Button from './Buttons'
import '../css/app.css'
import { URLContext } from '../context/url'

const FormProfile = ({ dataProfile }) => {
  const { token } = useContext(TokenContext)
  const { setLoaderButton, loaderButton } = useContext(LoaderButtonContext)
  const [updateProfile, setUpdateProfile] = useState(null)
  const [errorProfile, setErrorProfile] = useState('')
  const { URL } = useContext(URLContext)
  const handleUpdateProfile = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    setLoaderButton(true)
    updateProfileFunction(data, token, dataProfile._id, URL).then(res => { setLoaderButton(false); setUpdateProfile(true) }).catch(error => { setErrorProfile(error.response.data.msg); setLoaderButton(false); setUpdateProfile(false) })
  }
  useEffect(() => {
    if (updateProfile) {
      setTimeout(() => {
        alert('Profile updated correctly')
        setUpdateProfile(null)
      }, 300)
    }
    if (updateProfile === false) {
      setTimeout(() => {
        alert(errorProfile)
        setUpdateProfile(null)
        setErrorProfile('')
      }, 300)
    }
  }, [updateProfile])
  return (
    <form className='form-put ' onSubmit={handleUpdateProfile}>

      <div>
        <label htmlFor='nombre-perfil'>Profile name</label>
        <input
          minLength={5} maxLength={20} required defaultValue={dataProfile.profileName} id='nombre-perfil' name='profileName' type='text'
        />
      </div>
      <div>
        <label htmlFor='fotoperfil'>Profile photo</label>
        <input required accept='.jpg,.jpeg,.png' id='fotoperfil' name='image' type='file' />
      </div>
      <div>
        <label htmlFor='descripcionprofile'>Description</label>
        <textarea
          className='w-100' minLength={8} maxLength={1000} required defaultValue={dataProfile.profileDescription} id='descripcionprofile' name='profileDescription' type='text'
        />
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Button typeButton='submit' paddingButton='0.5em 1em'>
          {loaderButton ? <Spinner /> : 'Update'}
        </Button>
      </div>

    </form>
  )
}

export default FormProfile
