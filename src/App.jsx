// import { useState, useEffect } from 'react'
import './css/app.css'

import PageRoutes from './Routes'
// import { getAllPhotos, getOnePhoto, createPhoto, updatePhoto, deletePhoto } from './services/photos'
// import { updateProfile, getProfile } from './services/profile'
// import { login, logout } from './services/user'
// import validatePhotosFieldsWithoutSizesPrice from './services/validationPhotos'

function App () {
  return (
    <>
      <div className='app-container'><PageRoutes /></div>
    </>
  )
}

export default App

//   const [zoomed, setZoomed] = useState(false)
//   const [profile, setProfile] = useState({})
//   const [position, setPosition] = useState({ x: 0, y: 0 })
//   const urlImg = 'https://res.cloudinary.com/duuwqmpmn/image/upload/v1692880307/photo-bioteil/isgsdnqf8qy247dmbkic.jpg'
//   const handleZoomToggle = () => {
//     setZoomed(!zoomed)
//   }
//   const handleMouseMove = (e) => {
//     if (!zoomed) return

//     const { left, top, width, height } = e.target.getBoundingClientRect()
//     const x = ((e.clientX - left) / width) * 100
//     const y = ((e.clientY - top) / height) * 100

//     setPosition({ x, y })
//   }

//   const handleUpdateProfile = (e) => {
//     e.preventDefault()
//     const data = new FormData(e.target)
//     updateProfile(data, token, idProfile).then(res => alert('perfil modificado')).catch(error => alert(error.response.data.msg))
//   }


//   useEffect(() => {
//     getProfile().then(data => setProfile(data)).catch((error) => { console.log(error.response.data.msg) })
//   }, [])

//   const [profileFields, setprofileFields] = useState(
//     [
//       { profileName: '', error: '' },
//       { profileDescription: '', error: '' }
//     ]
//   )

//   useEffect(() => {
//     setprofileFields([
//       { profileName: profile.profileName, error: '' },
//       { profileDescription: profile.profileDescription, error: '' }
//     ])
//   }, [profile])

//   const handleProfileFields = (event) => {
//     const fieldName = event.target.name
//     const newProfileFields = structuredClone(profileFields)
//     const fieldToBeChanged = newProfileFields.findIndex(field => field?.[fieldName] !== undefined)
//     newProfileFields[fieldToBeChanged][fieldName] = event.target.value
//     setprofileFields(newProfileFields)
//   }

//   const [pointerEventsButtons, setPointerEventsButtons] = useState('all')

// comienza jsx

//  <div className='container'>
//         <div className={`image-zoom ${zoomed ? 'zoomed' : ''}`}>
//           <div className='zoom-container' onMouseEnter={handleZoomToggle} onMouseLeave={handleZoomToggle} onMouseMove={handleMouseMove}>
//             <img src={urlImg} alt='Zoomable' />
//             {zoomed && (
//               <div
//                 className='zoom-preview'
//                 style={{
//                   backgroundImage: `url(${urlImg})`,
//                   backgroundPosition: `${position.x}% ${position.y}%`

//                 }}
//               />
//             )}
//           </div>
//         </div>

//         <div>{position.x}</div><div>{position.y}</div>

//         <form className='form-put' onSubmit={handleUpdateProfile}>
//           <div>
//             <label htmlFor='nombre-perfil'>nombre de perfil</label>
//             <input onChange={handleProfileFields} value={profileFields[0].profileName} id='nombre-perfil' name='profileName' type='text' />
//           </div>
//           <div>
//             <label htmlFor='descripcionprofile'>descripcion</label>
//             <textarea onChange={handleProfileFields} value={profileFields[1].profileDescription} id='descripcionprofile' name='profileDescription' type='text' />
//           </div>
//           <div>
//             <label htmlFor='fotoperfil'>foto de perfil</label>
//             <input id='fotoperfil' name='image' type='file' />
//           </div>
//           <div>
//             <button>
//               modificar
//             </button>
//           </div>

//         </form>

//       </div>
