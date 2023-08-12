import axios from 'axios'

const PHOTOS_URL = 'http://localhost:3001/photos/'

export const getAllPhotos = (page) => {
  return axios.get(`${PHOTOS_URL}getallphotos?page=${page}`)
    .then((res) => { const { data } = res; const { allPhotos } = data; const { docs } = allPhotos; return docs })
}

export const createPhoto = (data, token) => {
  return axios.post(`${PHOTOS_URL}create`, data, {
    headers: {
      'Content-type': 'multipart/form-data;  ',
      Authorization: `Bearer ${token}`
    }
  })
}
export const updatePhoto = (data, token, id) => {
  return axios.put(`${PHOTOS_URL}updatephoto/${id}`, data, {
    headers: {
      'Content-type': 'multipart/form-data;  ',
      Authorization: `Bearer ${token}`
    }
  })
}
export const deletePhoto = (token, id) => {
  return axios.delete(`${PHOTOS_URL}deletephoto/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
