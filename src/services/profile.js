import axios from 'axios'

export const updateProfile = (data, token, id, URL) => {
  return axios.put(`${URL}/personal/updatepersonalinformation/${id}`, data, {
    headers: {
      'Content-type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  })
}

export const getProfile = (URL) => {
  return axios.get(`${URL}/personal/getpersonalinformation`).then((res) => { const { data } = res; const { allInformation } = data; return allInformation[0] })
}
