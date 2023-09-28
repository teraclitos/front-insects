import React, { useContext, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Header, Navbar } from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Loader from './components/Loader'
import NotFound from './components/NotFound'
import CreatePhoto from './components/CreatePhoto'
import AboutMe from './components/AboutMe'
import PhotoDetailContainer from './components/PhotoDetailContainer'
import { LoginProvider } from './context/login'
import './css/app.css'
import { CartProvider } from './context/cart'
import CheckOut from './components/CheckOut'
import { LoaderContext } from './context/loader'
import { useDataAllPhotos } from './hooks/useDataAllPhotos'
import { LogoutContext } from './context/logout'
import Opacity from './components/Opacity'
import { CartButtonContext } from './context/cartButton'
import { Cart } from './components/Cart'
import { NavbarButtonContext } from './context/navbar'
import { ModalContext } from './context/modal'

const PageRoutes = () => {
  const { dataAllPhotos, totalPages } = useDataAllPhotos()
  const { loader } = useContext(LoaderContext)
  const { logout } = useContext(LogoutContext)
  const { cartButton } = useContext(CartButtonContext)
  const { navbarButton } = useContext(NavbarButtonContext)
  const { modal } = useContext(ModalContext)
  useEffect(() => {
    if (logout) {
      setTimeout(() => {
        alert('logout succesfully')
      }, 300)
    }
  }, [logout])

  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Navbar />
        {(cartButton || navbarButton || modal) && <Opacity />}
        <Cart />
        <LoginProvider>
          <main className='main-page-container container'>
            <Routes>
              <Route
                path='/'
                element={!loader ? <Home dataAllPhotos={dataAllPhotos} totalPages={totalPages} /> : <Loader />}
              />
              <Route
                path='/photo/:id'
                element={<PhotoDetailContainer />}
              />
              <Route
                path='/aboutme'
                element={<AboutMe />}
              />
              <Route path='/admin' element={<Login />} />
              <Route path='/admin/createphoto' element={<CreatePhoto />} />
              <Route path='/checkout' element={<CheckOut />} />
              <Route
                path='*'
                element={<NotFound />}
              />
            </Routes>
          </main>
        </LoginProvider>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default PageRoutes
