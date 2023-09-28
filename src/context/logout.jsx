import { createContext, useState } from 'react'

export const LogoutContext = createContext()

export function LogoutProvider ({ children }) {
  const [logout, setLogout] = useState(false)

  return (
    <LogoutContext.Provider value={{
      logout,
      setLogout
    }}
    >
      {children}
    </LogoutContext.Provider>
  )
}
