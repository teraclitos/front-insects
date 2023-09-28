import React, { useContext } from 'react'
import { NavbarButtonContext } from '../context/navbar'
import '../css/app.css'

const HamburguerButton = () => {
  const { setNavbarButton, navbarButton } = useContext(NavbarButtonContext)
  return (
    <div>
      <button
        aria-label='Toggle Menu'
        aria-expanded={navbarButton}
        aria-controls='menuContent'
        className='hamburguer-button' onClick={() => { setNavbarButton((prev) => { document.body.style.overflow = 'hidden'; return !prev }) }}
      >
        <img
          className='hamburguer-image'
          src='https://res.cloudinary.com/duuwqmpmn/image/upload/v1695239443/icon-navbar_qhpe98.jpg' alt='this is the logo of the web page'
        />
      </button>
    </div>

  )
}

export default HamburguerButton
