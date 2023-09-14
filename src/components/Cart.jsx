import '../css/app.css'
import { useId, useEffect } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart.js'
import { CartItem } from './CartItem'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart, removeFromCart } = useCart()
  const sumAllItems = cart.reduce((total, item) => { return total + item.quantity }, 0)
  const sumAllItemsPrice = cart.reduce((total, item) => { return total + item.quantity * item.price }, 0)

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <>
      <div className='items-sum'><span>({sumAllItems})</span></div>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product._id}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
        <div><span>Total: ${sumAllItemsPrice}</span></div>
        <Link to='/checkout'>checkout</Link>
      </aside>
    </>
  )
}
