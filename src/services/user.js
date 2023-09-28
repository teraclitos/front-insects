import axios from 'axios'

export const login = (data, URL) => {
  return axios.post(`${URL}/user/loginuser`, data)
}
export const logout = (token, URL) => {
  return axios.post(`${URL}/user/logoutuser`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
