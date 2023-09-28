import { createContext } from 'react'

export const URLContext = createContext()

export function URLProvider ({ children }) {
  const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : ''
  return (
    <URLContext.Provider value={{
      URL
    }}
    >
      {children}
    </URLContext.Provider>
  )
}
