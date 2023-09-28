import React, { useContext } from 'react'
import '../css/app.css'
import { ModalContext } from '../context/modal'
import CloseButton from './CloseButton'

const ModalPhoto = ({ photoUrl, photoDescription }) => {
  const { modal, setModal } = useContext(ModalContext)
  return (
    <>
      <div className={`modal-button ${modal && 'modal-button-active'}`}>
        <CloseButton label='Close Modal' closeFunction={() => { setModal(!modal); document.body.style.overflow = 'visible' }} />
      </div>
      <div className={`modal-photo-container justify-content-center align-items-center ${modal ? 'd-flex' : 'd-none'}`}>
        <div className='modal-padding '>
          <img className='modal-photo' src={photoUrl} alt={photoDescription} />
        </div>
      </div>
    </>
  )
}

export default ModalPhoto
