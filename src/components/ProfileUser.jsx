import React from 'react'
const ProfileUser = ({ dataProfile }) => {
  return (
    <div>
      {dataProfile?.profile_IMG?.url ? <img src={dataProfile.profile_IMG.url} alt={dataProfile.description} /> : 'loading'}
    </div>
  )
}

export default ProfileUser
