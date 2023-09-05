import React, { useContext } from 'react'

import { TokenContext } from '../context/token'
import { updateProfile } from '../services/profile'

const FormProfile = ({ dataProfile }) => {
  const { token } = useContext(TokenContext)
  const handleUpdateProfile = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    updateProfile(data, token, dataProfile._id).then(res => alert('perfil modificado')).catch(error => alert(error.response.data.msg))
  }
  return (
    <form className='form-put' onSubmit={handleUpdateProfile}>
      <div>
        <label htmlFor='nombre-perfil'>profile name</label>
        <input
          minLength={5} maxLength={20} required defaultValue={dataProfile.profileName} id='nombre-perfil' name='profileName' type='text'
        />
      </div>
      <div>
        <label htmlFor='descripcionprofile'>description</label>
        <textarea
          minLength={8} maxLength={1000} required defaultValue={dataProfile.profileDescription} id='descripcionprofile' name='profileDescription' type='text'
        />
      </div>
      <div>
        <label htmlFor='fotoperfil'>profile photo</label>
        <input required accept='.jpg,.jpeg,.png' id='fotoperfil' name='image' type='file' />
      </div>
      <div>
        <button>
          modificar
        </button>
      </div>

    </form>
  )
}

export default FormProfile
