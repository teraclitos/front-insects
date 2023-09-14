import { TokenProvider } from './context/token'
import './css/app.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import PageRoutes from './Routes'

function App () {
  const initialOptions = {
    clientId: 'AYrSVhpxp0Oq3oSfvPftmp87iaXQ21Biz-M3uUnRqWqKZcmS49Xdu3V07FBHC2hsZX4K-mERciLbfGQk',
    currency: 'USD',
    intent: 'capture',
    locale: 'fr_FR'
  }
  return (
    <PayPalScriptProvider initialOptions={initialOptions}>
      <TokenProvider>
        <div className='app-container'><PageRoutes /></div>
      </TokenProvider>
    </PayPalScriptProvider>

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
