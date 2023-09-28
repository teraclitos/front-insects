import { useRef, useState } from 'react'
import { useCart } from './useCart'

export const useCartAbstraction = () => {
  const { addToCart } = useCart()
  const [itemsArrayPosition, setItemsArrayPosition] = useState(0)
  const idItem = useRef(0)
  const handleitemsArrayPosition = (event, data) => {
    setItemsArrayPosition(event.target.selectedIndex)
    idItem.current = data.items[event.target.selectedIndex].id
  }

  return { addToCart, itemsArrayPosition, handleitemsArrayPosition }
}
