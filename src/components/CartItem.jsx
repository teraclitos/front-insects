import '../css/app.css'
import Button from './Buttons'

export const CartItem = ({ size, price, artistName, quantity, photo, addToCart, removeFromCart }) => {
  const paddingButton = '0.2em 0.5em'
  return (
    <li className='cart-container py-3'>
      <div className='d-flex flex-column align-items-center gap-1 '>
        <img
          src={photo}
          alt={artistName}
        />
        <div>
          <strong>{artistName}</strong> - ${price}
        </div>
        <div>{`${size.width} x ${size.height} Inches`}</div>
      </div>

      <footer className='d-flex justify-content-center mt-2 '>
        <Button typeButton='button' paddingButton={paddingButton} clickFunction={removeFromCart}>-</Button>
        <small>
          Qty: {quantity}
        </small>
        <Button typeButton='button' paddingButton={paddingButton} clickFunction={addToCart}>+</Button>
      </footer>
    </li>
  )
}
