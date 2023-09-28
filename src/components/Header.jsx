import React, { useContext } from 'react'
import '../css/app.css'
import HamburguerButton from './HamburguerButton'
import { Link, useNavigate } from 'react-router-dom'
import { CartButton } from './Cart'
import { TokenContext } from '../context/token'
import { logout } from '../services/user'
import { LoaderContext } from '../context/loader'
import { LogoutContext } from '../context/logout'
import { NavbarButtonContext } from '../context/navbar'
import { URLContext } from '../context/url'
import CloseButton from './CloseButton'
export const Header = () => {
  const { token, setToken } = useContext(TokenContext)
  const { setLogout } = useContext(LogoutContext)
  const navigation = useNavigate()
  const { URL } = useContext(URLContext)
  const handleLogout = async (e) => {
    e.preventDefault()

    try {
      await logout(token, URL)
      setToken(null)
      window.localStorage.removeItem('token')
      setLogout(true)
      navigation('/')
    } catch (error) {
      alert('Logout failed. Please try again.')
    }
  }
  return (

    <header className='header-bio container-fluid  px-5 sticky-top d-flex align-items-center  '>
      <nav className='   w-100 '>
        <ul className='d-flex justify-content-between align-items-center p-0 m-0 '>
          <li><HamburguerButton /></li>
          <li> <Link to='/'><h1>BIOTHEYL</h1></Link></li>
          {!token && <li> <CartButton /></li>}
          {token && <li> <button type='button' onClick={handleLogout}>logout</button></li>}
        </ul>
      </nav>
    </header>

  )
}
export const Navbar = () => {
  const { token } = useContext(TokenContext)
  const { setLoader } = useContext(LoaderContext)
  const { navbarButton, setNavbarButton } = useContext(NavbarButtonContext)
  const closeFunction = () => {
    setNavbarButton((prev) => {
      document.body.style.overflow = 'auto'
      return !prev
    })
  }

  return (
    <>

      <div className={navbarButton ? 'close-navbar-button close-navbar-button-active' : 'close-navbar-button'}>
        <CloseButton label='Close Menu' closeFunction={closeFunction} />
      </div>

      <aside id='menuContent' className={navbarButton ? 'offcanvas-navbar offcanvas-navbar-active' : 'offcanvas-navbar'}>
        <div />
        <nav>
          <ul>
            <li>
              <Link
                onClick={() => { if (window.location.pathname !== '/') { setNavbarButton(!navbarButton); document.body.style.overflow = 'auto' } }}
                to='/'
              >Home
              </Link>
            </li>
            <li><Link onClick={() => { if (window.location.pathname !== '/aboutme') { setLoader(true); setNavbarButton(!navbarButton); document.body.style.overflow = 'auto' } }} to='/aboutme'>About me </Link></li>
            {token && <li><Link onClick={() => { if (window.location.pathname !== '/admin/createphoto') { setNavbarButton(!navbarButton); document.body.style.overflow = 'auto' } }} to='/admin/createphoto'>Create photo </Link></li>}

          </ul>
        </nav>
      </aside>
    </>
  )
}
