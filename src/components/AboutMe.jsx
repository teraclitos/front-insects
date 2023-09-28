import React, { useContext } from 'react'
import { TokenContext } from '../context/token'
import FormProfile from './FormProfile'
import ProfileUser from './ProfileUser'
import { useDataProfile } from '../hooks/useDataProfile'
import Loader from './Loader'
import { LoaderContext } from '../context/loader'

const AboutMe = () => {
  const { token } = useContext(TokenContext)
  const { dataProfile } = useDataProfile()
  const { loader } = useContext(LoaderContext)
  return (
    <>{
    loader
      ? <Loader />
      : <div className='w-75 mt-5  about-me'>
        {
      token
        ? <FormProfile dataProfile={dataProfile} />
        : <ProfileUser dataProfile={dataProfile} />
    }
        </div>
    }
    </>
  )
}

export default AboutMe
