import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartButtonProvider } from './context/cartButton.jsx'
import { NavbarButtonProvider } from './context/navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarButtonProvider>
      <CartButtonProvider>
        <App />
      </CartButtonProvider>
    </NavbarButtonProvider>
  </React.StrictMode>
)
