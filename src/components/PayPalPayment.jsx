import React, { useContext } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useCart } from '../hooks/useCart'
import { URLContext } from '../context/url'
const PayPalPayment = () => {
  const { URL } = useContext(URLContext)
  const PAYPAL_URL = `${URL}/payment`
  const { cart } = useCart()
  const createOrder = (data) => {
    return fetch(`${PAYPAL_URL}/createorder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cart
      })
    })
      .then((response) => response.json())
      .then((order) => order.id)
  }
  const onApprove = (data) => {
    return fetch(`${PAYPAL_URL}/captureorder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orderID: data.orderID
      })
    })
      .then((response) => response.json())
  }
  return (
    <div className='mt-5'>
      <PayPalButtons
        createOrder={(data, actions) => { createOrder(data, actions) }}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </div>
  )
}

export default PayPalPayment
