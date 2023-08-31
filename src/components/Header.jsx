import React from 'react'
import '../css/app.css'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { CartIcon } from './Icons'

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/aboutme'>About me </Link></li>
          <li><CartIcon /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
