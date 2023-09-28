import { createContext, useState } from 'react'

export const CartButtonContext = createContext()

export function CartButtonProvider ({ children }) {
  const [cartButton, setCartButton] = useState(false)

  return (
    <CartButtonContext.Provider value={{
      cartButton,
      setCartButton
    }}
    >
      {children}
    </CartButtonContext.Provider>
  )
}
