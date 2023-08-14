import axios from 'axios'
const USER_URL = 'http://localhost:3001/user'

export const login = (data) => {
  return axios.post(`${USER_URL}/loginuser`, data)
}
export const logout = (token) => {
  return axios.post(`${USER_URL}/logoutuser`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
