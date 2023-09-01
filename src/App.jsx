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

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDE2NmU3MTJkYmU2YTg4MGFhYzBkNCIsInJvbGUiOiJhZG1pbmJpb2xvZ2ljdGhleWxoYXJkIiwiaWF0IjoxNjkyODgwMjQ1LCJleHAiOjE2OTI5MjM0NDV9.mnLX5I8_7ND_wPhf0POexX-P4Nk26HH51OtTLRybJ1I'
//   const ID = '64df8b0073983ccc5e9efa60'
//   const idProfile = '64d162a611a63baf55329ad1'
//   const page = 1
//   const [zoomed, setZoomed] = useState(false)
//   const [photos, setPhotos] = useState([])
//   const [onePhoto, setOnePhoto] = useState({})
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

//   const handleUpdatePhoto = (e) => {
//     e.preventDefault()
//     const data = new FormData(e.target)

//     data.append('pricesSizes', JSON.stringify([{ price: 25, size: { width: 20, height: 30 } }, { price: 20, size: { width: 50, height: 30 } }]))

//     updatePhoto(data, token, ID).then(res => alert('foto modificada')).catch(error => alert(error.response.data.msg))
//   }
//   const handleDeletePhoto = (e) => {
//     deletePhoto(token, ID).then(res => alert('foto eliminada')).catch(error => alert(error.response.data.msg))
//   }
//   const handleUpdateProfile = (e) => {
//     e.preventDefault()
//     const data = new FormData(e.target)
//     updateProfile(data, token, idProfile).then(res => alert('perfil modificado')).catch(error => alert(error.response.data.msg))
//   }
//   const handleLogin = (e) => {
//     e.preventDefault()
//     const data = Object.fromEntries(new FormData(e.target))
//     login(data).then(res => alert('usuario logueado')).catch(error => alert(error.response.data.msg))
//   }
//   const handleLogout = (e) => {
//     logout(token).then(res => alert('ha cerrado la sesion correctamente')).catch(error => alert(error.response.data.msg))
//   }



//   useEffect(() => {
//     getProfile().then(data => setProfile(data)).catch((error) => { console.log(error.response.data.msg) })
//   }, [])

//   const [photoFieldsCreate, setPhotoFieldsCreate] = useState(
//     [
//       { artistName: '', error: 'El campo artisName está vacío' },
//       { scientificName: '', error: 'El campo scientificName está vacío' },
//       { description: '', error: 'El campo description está vacío' }

//     ]
//   )
//
//   const [sizesPrice, setSizesPrice] = useState({ size: { width: '', height: '' }, price: '' })
//   const [sizesPriceArray, setSizesPriceArray] = useState([])
//   const handleSizesPrices = (event) => {
//     const fieldName = event.target.name
//     const newSizesPrice = { ...sizesPrice }
//     if (fieldName === 'price') {
//       newSizesPrice[fieldName] = Number(event.target.value)
//     } else {
//       newSizesPrice.size[fieldName] = Number(event.target.value)
//     }

//     setSizesPrice(newSizesPrice)
//   }
//   const handleSizesPriceArray = () => {
//     const newSizesPriceArray = structuredClone(sizesPriceArray)
//     const newSizesPrice = { ...sizesPrice }
//     newSizesPriceArray.push(newSizesPrice)
//     setSizesPriceArray(newSizesPriceArray)
//     setSizesPrice({ size: { width: '', height: '' }, price: '' })
//   }
//   const handleSizesPriceArrayClean = () => {
//     setSizesPriceArray([])
//   }
//   const handlesSizesPriceArrayDeleteOne = (indexToDelete) => {
//     const newSizesPriceArray = sizesPriceArray.filter((el, id) => id !== indexToDelete)
//     setSizesPriceArray(newSizesPriceArray)
//   }

//   const [firstInputCheck, setFirstInputCheck] = useState(
//     [
//       { scientificName: false },
//       { artistName: false },
//       { description: false },
//       { price: false },
//       { width: false },
//       { height: false }
//     ]
//   )
//   useEffect(() => {
//     console.log({ firstInputCheck, photoFieldsCreate, profileFields, profile })
//   }, [firstInputCheck, photoFieldsCreate, profile])
//   const activateError = (event) => {
//     const fieldName = event.target.name
//     const newFirstInputCheck = structuredClone(firstInputCheck)
//     const indexInputCheckToChange = newFirstInputCheck.findIndex(field => field?.[fieldName] !== undefined)
//     newFirstInputCheck[indexInputCheckToChange][fieldName] = true
//     setFirstInputCheck(newFirstInputCheck)
//   }
//   const checkIfThereIsAnyError = () => {
//     return photoFieldsCreate.some(field => field.error)
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

//         <ul>
//           {photos.map(photo => (

//             <li
//               key={photo._id}
//             >
//               <img className='img-proof' src={photo.photos_URL[0].url} alt={photo.description} />

//             </li>

//           )

//           )}

//         </ul>
//         <form className='form-put formy' onSubmit={handleCreatePhoto}>
//           <div>
//             <label htmlFor='nombre-cientifico'>nombre cientifico</label>
//             <input onBlur={activateError} onChange={handleChangeFieldCreate} id='nombre-cientifico' name='scientificName' type='text' />
//             {firstInputCheck[0].scientificName && <div className='error'>{photoFieldsCreate[1].error}</div>}
//           </div>
//           <div>
//             <label htmlFor='nombre-artistico'>nombre artistico</label>
//             <input onBlur={activateError} onChange={handleChangeFieldCreate} id='nombre-artistico' name='artistName' type='text' />
//             {firstInputCheck[1].artistName && <div className='error'>{photoFieldsCreate[0].error}</div>}
//           </div>
//           <div>
//             <label htmlFor='fotos'>fotos</label>
//             <input id='fotos' name='images' type='file' multiple />
//           </div>
//           <div>
//             <label htmlFor='descripcion'>descripcion</label>
//             <textarea onBlur={activateError} onChange={handleChangeFieldCreate} id='descripcion' name='description' type='text' />
//             {firstInputCheck[2].description && <div className='error'>{photoFieldsCreate[2].error}</div>}
//           </div>
//           <div>
//             <div>
//               <label htmlFor='widthinput'>width</label>
//               <input name='width' value={sizesPrice.size.width} onChange={handleSizesPrices} id='widthinput' type='number' />
//             </div>
//             <div>
//               <label htmlFor='heightinput'>height</label>
//               <input name='height' value={sizesPrice.size.height} onChange={handleSizesPrices} id='heightinput' type='number' />
//             </div>
//             <div>
//               <label htmlFor='priceinput'>prize</label>
//               <input name='price' value={sizesPrice.price} onChange={handleSizesPrices} id='priceinput' type='number' />
//             </div>
//             <button onClick={handleSizesPriceArray} type='button'>añadir </button>
//             <button onClick={handleSizesPriceArrayClean} type='button'>limpiar</button>
//           </div>
//           {sizesPriceArray.length > 0 &&
//             <table>
//               <thead>
//                 <tr>
//                   <th />
//                   <th colSpan={2}>size</th>
//                   <th colSpan={2} />
//                 </tr>
//                 <tr>
//                   <th>id</th>
//                   <th>width</th>
//                   <th>height</th>
//                   <th>price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {
//               sizesPriceArray.map((field, index) => (
//                 <tr key={`row${index}`}>
//                   <td>
//                     {index + 1}
//                   </td>
//                   <td>
//                     {field?.size?.width}
//                   </td>
//                   <td>
//                     {field?.size?.height}
//                   </td>
//                   <td>
//                     {field?.price}
//                   </td>
//                   <td>
//                     <button type='button' onClick={() => { handlesSizesPriceArrayDeleteOne(index) }}>eliminar</button>
//                   </td>
//                 </tr>))
// }
//               </tbody>
//             </table>}
//           <div>
//             <button style={{ pointerEvents: pointerEventsButtons }}>
//               crear
//             </button>
//           </div>

//         </form>

//         <form className='form-put' onSubmit={handleUpdatePhoto}>
//           <div>
//             <label htmlFor='nombre-cientifico1'>nombre cientifico</label>
//             <input id='nombre-cientifico1' name='scientificName' type='text' />
//           </div>
//           <div>
//             <label htmlFor='nombre-artistico1'>nombre artistico</label>
//             <input id='nombre-artistico1' name='artistName' type='text' />
//           </div>
//           <div>
//             <label htmlFor='fotos1'>fotos</label>
//             <input id='fotos1' name='images' type='file' multiple />
//           </div>
//           <div>
//             <label htmlFor='descripcion'>descripcion</label>
//             <textarea id='descripcion1' name='description' type='text' />
//           </div>
//           <div>
//             <button type='submit'>
//               modificar
//             </button>
//             <button type='button' onClick={handleDeletePhoto}>borrar</button>
//           </div>

//         </form>

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
//         <form className='form-put' onSubmit={handleLogin}>
//           <div>
//             <label htmlFor='nombre-usuario'>nombre de usuario</label>
//             <input id='nombre-usuario' name='username' type='text' />
//           </div>
//           <div>
//             <label htmlFor='contraseña'>contraseña</label>
//             <input id='contraseña' name='password' type='password' />
//           </div>
//           <div>
//             <button type='submit'>
//               login
//             </button>
//             <button type='button' onClick={handleLogout}>logout</button>
//           </div>

//         </form>
//         {onePhoto?.photos_URL ? <img className='img-proof' src={onePhoto.photos_URL[1].url} alt='onephoto' /> : <img src='https://res.cloudinary.com/duuwqmpmn/image/upload/v1691797418/photo-bioteil/zq0d4plx5ezhzq911gc3.png' alt='onephoto' />}
//         {profile?.profile_IMG ? <img className='img-proof' src={profile.profile_IMG.url} alt='profilephoto' /> : <img src='https://res.cloudinary.com/duuwqmpmn/image/upload/v1691797418/photo-bioteil/zq0d4plx5ezhzq911gc3.png' alt='onephoto' />}

//       </div>
//       <a href='https://youtu.be/DkGyH-E82uI'>linkedin</a>
