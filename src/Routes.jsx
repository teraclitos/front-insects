import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import CreatePhoto from './components/CreatePhoto'
import AboutMe from './components/AboutMe'
import PhotoDetailContainer from './components/PhotoDetailContainer'
import { LoginProvider } from './context/login'
import './css/app.css'
import { CartProvider } from './context/cart'
import CheckOut from './components/CheckOut'

const PageRoutes = () => {
  return (
    <BrowserRouter>
    
      <CartProvider>
        <Header />

        <LoginProvider>
          <main className='main-page-container'>
            <Routes>
              <Route
                path='/'
                element={<Home />}
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
