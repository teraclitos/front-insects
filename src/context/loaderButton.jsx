import { createContext, useState } from 'react'

export const LoaderButtonContext = createContext()

export function LoaderButtonProvider ({ children }) {
  const [loaderButton, setLoaderButton] = useState(false)

  return (
    <LoaderButtonContext.Provider value={{
      loaderButton,
      setLoaderButton
    }}
    >
      {children}
    </LoaderButtonContext.Provider>
  )
}
