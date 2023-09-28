import '../css/app.css'
import PhotosBuyingInformation from './PhotosBuyingInformation'
import PhotosZoomed from './PhotosZoomed'
const PhotoDetailUser = ({ dataOnePhoto }) => {
  return (
    <div className='photo-detail-user-container w-100'>
      <PhotosZoomed dataOnePhoto={dataOnePhoto} />
      <PhotosBuyingInformation dataOnePhoto={dataOnePhoto} />
    </div>
  )
}

export default PhotoDetailUser
