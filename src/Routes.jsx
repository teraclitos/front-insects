import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import CreatePhoto from './components/CreatePhoto'
import AboutMe from './components/AboutMe'

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/aboutme'
          element={<AboutMe />}
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
