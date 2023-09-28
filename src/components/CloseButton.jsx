import React from 'react'
import '../css/app.css'

const CloseButton = ({ label, closeFunction }) => {
  return (

    <button onClick={closeFunction} aria-label={label} className='close-button text-light fs-3'>
      X
      {/* <img className='close-button-img' src='https://res.cloudinary.com/duuwqmpmn/image/upload/v1695762543/newclosebutton_p8ognl.jpg' alt='close button ' /> */}
    </button>

  )
}

export default CloseButton
