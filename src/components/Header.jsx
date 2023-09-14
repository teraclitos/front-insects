import React, { useContext } from 'react'
import '../css/app.css'
import Logo from './Logo'
import { Link, useNavigate } from 'react-router-dom'
import { Cart } from './Cart'
import { TokenContext } from '../context/token'
import { logout } from '../services/user'

const Header = () => {
  const navigation = useNavigate()
  const { token, setToken } = useContext(TokenContext)
  const handleLogout = async (e) => {
    e.preventDefault()

    try {
      await logout(token)
      setToken(null)
      window.localStorage.removeItem('token')
      navigation('/')
    } catch (error) {
      alert('Logout failed. Please try again.')
    }
  }
  return (
    <header className='header'>
      <Link to='/'>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/aboutme'>About me </Link></li>
          {token && <li><Link to='/admin/createphoto'>Create photo </Link></li>}
          {!token && <li><Cart /></li>}
          {token && <li><button type='button' onClick={handleLogout}>logout</button></li>}
        </ul>
      </nav>
    </header>

  )
}

export default Header
