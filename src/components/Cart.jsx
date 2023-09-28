import '../css/app.css'
import { useContext } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart.js'
import { CartItem } from './CartItem'
import { Link } from 'react-router-dom'
import { CartButtonContext } from '../context/cartButton'
import CloseButton from './CloseButton'

export const Cart = () => {
  const { cart, clearCart, addToCart, removeFromCart } = useCart()
  const { cartButton, setCartButton } = useContext(CartButtonContext)
  const sumAllItemsPrice = cart.reduce((total, item) => { return total + item.quantity * item.price }, 0)

  return (
    <>
      <div className={cartButton ? 'close-cart-button close-cart-button-active' : 'close-cart-button'}>

        <CloseButton
          label='Close-Cart'
          closeFunction={() => {
            setCartButton((prev) => {
              setTimeout(() => {
                document.body.style.overflow = 'auto'
              }, 300)
              return !prev
            })
          }}
        />

      </div>

      <aside id='CartContent' className={cartButton ? 'cart cart-active' : 'cart'}>
        <div />
        <div className='items-container'>
          <ul className='p-0'>
            {cart.map(product => (
              <CartItem
                key={product._id}
                addToCart={() => addToCart(product)}
                removeFromCart={() => removeFromCart(product)}
                {...product}
              />
            ))}
          </ul>
          <div className='d-flex flex-column align-items-center'>
            <button onClick={clearCart}>
              <ClearCartIcon />
            </button>
            <div><span>Total: ${sumAllItemsPrice}</span></div>
            <Link to='/checkout'>checkout</Link>
          </div>
        </div>

      </aside>

    </>
  )
}

export const CartButton = () => {
  const { cart } = useCart()
  const { setCartButton, cartButton } = useContext(CartButtonContext)
  const sumAllItems = cart.reduce((total, item) => { return total + item.quantity }, 0)

  return (
    <div className='d-flex gap-1 align-items-center'>
      <button
        aria-label='Toggle Cart'
        aria-expanded={cartButton}
        aria-controls='CartContent'
        onClick={() => {
          setCartButton((prev) => {
            document.body.style.overflow = 'hidden'
            return !prev
          })
        }} className='cart-button '
      >
        <CartIcon />
      </button>
      <div className='items-sum'><span>({sumAllItems})</span></div>
    </div>

  )
}
