import axios from 'axios'

const PROFILE_URL = 'http://localhost:3001/personal/updatepersonalinformation'

const updateProfile = (data, token, id) => {
  return axios.put(`${PROFILE_URL}/${id}`, data, {
    headers: {
      'Content-type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  })
}

export default updateProfile
