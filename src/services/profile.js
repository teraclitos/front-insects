import axios from 'axios'

const PROFILE_URL = 'http://localhost:3001/personal/'

export const updateProfile = (data, token, id) => {
  return axios.put(`${PROFILE_URL}/updatepersonalinformation/${id}`, data, {
    headers: {
      'Content-type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  })
}

export const getProfile = () => {
  return axios.get(`${PROFILE_URL}/getpersonalinformation`).then((res) => { const { data } = res; const { allInformation } = data; return allInformation[0] })
}
