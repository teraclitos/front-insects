import axios from 'axios'

export const getAllPhotos = (page, URL) => {
  return axios.get(`${URL}/photos/getallphotos?page=${page}`)
    .then((res) => { const { data } = res; const { allPhotos } = data; return allPhotos })
}
export const getOnePhoto = (id, URL) => {
  return axios.get(`${URL}/photos/getonephoto/${id}`)
    .then((res) => { const { data } = res; const { getOnePhoto } = data; return getOnePhoto })
}

export const createPhoto = (data, token, URL) => {
  return axios.post(`${URL}/photos/create`, data, {
    headers: {
      'Content-type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  })
}
export const updatePhoto = (data, token, id, URL) => {
  return axios.put(`${URL}/photos/updatephoto/${id}`, data, {
    headers: {
      'Content-type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  })
}
export const deletePhoto = (token, id, URL) => {
  return axios.delete(`${URL}/deletephoto/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
