import { createContext, useState } from 'react'

export const NavbarButtonContext = createContext()

export function NavbarButtonProvider ({ children }) {
  const [navbarButton, setNavbarButton] = useState(false)

  return (
    <NavbarButtonContext.Provider value={{
      navbarButton,
      setNavbarButton
    }}
    >
      {children}
    </NavbarButtonContext.Provider>
  )
}
