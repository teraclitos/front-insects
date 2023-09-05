import React, { useContext } from 'react'
import { TokenContext } from '../context/token'
import FormProfile from './FormProfile'
import ProfileUser from './ProfileUser'
import { useDataProfile } from '../hooks/useDataProfile'

const AboutMe = () => {
  const { token } = useContext(TokenContext)
  const { dataProfile } = useDataProfile()
  return (
    <div>
      {
      token
        ? <FormProfile dataProfile={dataProfile} />
        : <ProfileUser dataProfile={dataProfile} />
    }
    </div>
  )
}

export default AboutMe
