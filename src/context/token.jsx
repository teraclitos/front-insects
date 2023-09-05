import { createContext, useState } from 'react'

export const TokenContext = createContext()

export function TokenProvider ({ children }) {
  const tokenInitialState = JSON.parse(window.localStorage.getItem('token')) || null

  const [token, setToken] = useState(tokenInitialState)

  return (
    <TokenContext.Provider value={{
      token,
      setToken
    }}
    >
      {children}
    </TokenContext.Provider>
  )
}
