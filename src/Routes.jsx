import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import CreatePhoto from './components/CreatePhoto'

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/admin'
          element={<Login />}
        />
        <Route
          path='/admin/createphoto'
          element={<CreatePhoto />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default PageRoutes
