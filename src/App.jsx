import { useState, useEffect } from 'react'
import './App.css'
import { getAllPhotos, createPhoto, updatePhoto, deletePhoto } from './services/photos'
import updateProfile from './services/profile'
import { login, logout } from './services/user'

function App () {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDE2NmU3MTJkYmU2YTg4MGFhYzBkNCIsInJvbGUiOiJhZG1pbmJpb2xvZ2ljdGhleWxoYXJkIiwiaWF0IjoxNjkyMDI5MDUwLCJleHAiOjE2OTIwNzIyNTB9.Zx-kMLq5pONtx9GupIhlZv7b3OY9xGU7f1U0lR-D1_w'
  const ID = '64d103f9e868411d2a2b9595'
  const idProfile = '64d162a611a63baf55329ad1'
  const [zoomed, setZoomed] = useState(false)
  const [photos, setPhotos] = useState([])
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const urlImg = 'https://res.cloudinary.com/duuwqmpmn/image/upload/v1691797419/photo-bioteil/tvd6bvopuhyypswynxeu.jpg'
  const handleZoomToggle = () => {
    setZoomed(!zoomed)
  }

  const handleMouseMove = (e) => {
    if (!zoomed) return

    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setPosition({ x, y })
  }
  const handleCreatePhoto = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    data.append('pricesSizes', JSON.stringify([{ price: 25, size: { width: 20, height: 30 } }, { price: 20, size: { width: 50, height: 30 } }]))

    createPhoto(data, token).then(res => alert('foto creada')).catch(error => alert(error))
  }
  const handleUpdatePhoto = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    data.append('pricesSizes', JSON.stringify([{ price: 25, size: { width: 20, height: 30 } }, { price: 20, size: { width: 50, height: 30 } }]))

    updatePhoto(data, token, ID).then(res => alert('foto modificada')).catch(error => alert(error))
  }
  const handleDeletePhoto = (e) => {
    deletePhoto(token, ID).then(res => alert('foto eliminada')).catch(error => alert(error))
  }
  const handleUpdateProfile = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    updateProfile(data, token, idProfile).then(res => alert('perfil modificado')).catch(error => alert(error))
  }
  const handleLogin = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    login(data).then(res => alert('usuario logueado')).catch(error => alert(error))
  }
  const handleLogout = (e) => {
    logout(token).then(res => alert('ha cerrado la sesion correctamente')).catch(error => alert(error))
  }
  useEffect(() => {
    try {
      getAllPhotos(1).then(data => setPhotos(data))
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <>
      <div className='container'>
        <div className={`image-zoom ${zoomed ? 'zoomed' : ''}`}>
          <div className='zoom-container' onMouseEnter={handleZoomToggle} onMouseLeave={handleZoomToggle} onMouseMove={handleMouseMove}>
            <img src={urlImg} alt='Zoomable' />
            {zoomed && (
              <div
                className='zoom-preview'
                style={{
                  backgroundImage: `url(${urlImg})`,
                  backgroundPosition: `${position.x}% ${position.y}%`

                }}
              />
            )}
          </div>
        </div>

        <div>{position.x}</div><div>{position.y}</div>

        <ul>
          {photos.map(photo => (

            <li
              key={photo._id}
            >
              <img className='img-proof' src={photo.photos_URL[0].url} alt={photo.description} />

            </li>

          )

          )}

        </ul>

        <form className='form-put' onSubmit={handleCreatePhoto}>
          <div>
            <label htmlFor='nombre-cientifico'>nombre cientifico</label>
            <input id='nombre-cientifico' name='scientificName' type='text' />
          </div>
          <div>
            <label htmlFor='nombre-artistico'>nombre artistico</label>
            <input id='nombre-artistico' name='artistName' type='text' />
          </div>
          <div>
            <label htmlFor='fotos'>fotos</label>
            <input id='fotos' name='images' type='file' multiple />
          </div>
          <div>
            <label htmlFor='descripcion'>descripcion</label>
            <textarea id='descripcion' name='description' type='text' />
          </div>
          <div>
            <button>
              crear
            </button>
          </div>

        </form>

        <form className='form-put' onSubmit={handleUpdatePhoto}>
          <div>
            <label htmlFor='nombre-cientifico1'>nombre cientifico</label>
            <input id='nombre-cientifico1' name='scientificName' type='text' />
          </div>
          <div>
            <label htmlFor='nombre-artistico1'>nombre artistico</label>
            <input id='nombre-artistico1' name='artistName' type='text' />
          </div>
          <div>
            <label htmlFor='fotos1'>fotos</label>
            <input id='fotos1' name='images' type='file' multiple />
          </div>
          <div>
            <label htmlFor='descripcion'>descripcion</label>
            <textarea id='descripcion1' name='description' type='text' />
          </div>
          <div>
            <button type='submit'>
              modificar
            </button>
            <button type='button' onClick={handleDeletePhoto}>borrar</button>
          </div>

        </form>

        <form className='form-put' onSubmit={handleUpdateProfile}>
          <div>
            <label htmlFor='nombre-cientifico'>nombre de perfil</label>
            <input id='nombre-cientifico' name='profileName' type='text' />
          </div>
          <div>
            <label htmlFor='descripcionprofile'>descripcion</label>
            <textarea id='descripcionprofile' name='profileDescription' type='text' />
          </div>
          <div>
            <label htmlFor='fotoperfil'>foto de perfil</label>
            <input id='fotoperfil' name='image' type='file' />
          </div>
          <div>
            <button>
              modificar
            </button>
          </div>

        </form>
        <form className='form-put' onSubmit={handleLogin}>
          <div>
            <label htmlFor='nombre-usuario'>nombre de usuario</label>
            <input id='nombre-usuario' name='username' type='text' />
          </div>
          <div>
            <label htmlFor='contraseña'>contraseña</label>
            <input id='contraseña' name='password' type='password' />
          </div>
          <div>
            <button type='submit'>
              login
            </button>
            <button type='button' onClick={handleLogout}>logout</button>
          </div>

        </form>

      </div>
    </>
  )
}

export default App
