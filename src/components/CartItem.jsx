import '../css/app.css'

export const CartItem = ({ size, price, artistName, quantity, photo, addToCart, removeFromCart }) => {
  return (
    <li className='cart-container'>
      <img
        src={photo}
        alt={artistName}
      />
      <div>
        <strong>{artistName}</strong> - ${price}
      </div>
      <div>{`${size.width} x ${size.height}`}</div>

      <footer>
        <button onClick={removeFromCart}>-</button>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}
