import React from 'react'
import '../css/app.css'

const Button = ({ children, clickFunction, paddingButton, typeButton }) => {
  return (
    <button type={typeButton} style={{ padding: paddingButton }} onClick={clickFunction} className='button-biotheyl' role='button'>{children}</button>
  )
}

export default Button
