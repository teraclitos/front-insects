// import { useState, useEffect } from 'react'
import { TokenProvider } from './context/token'
import './css/app.css'

import PageRoutes from './Routes'
// import { getAllPhotos, getOnePhoto, createPhoto, updatePhoto, deletePhoto } from './services/photos'
// import { updateProfile, getProfile } from './services/profile'
// import { login, logout } from './services/user'
// import validatePhotosFieldsWithoutSizesPrice from './services/validationPhotos'

function App () {
  return (
    <TokenProvider>
      <div className='app-container'><PageRoutes /></div>
    </TokenProvider>

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

//       </div>
