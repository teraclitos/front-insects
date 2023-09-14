import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useCart } from '../hooks/useCart'
const PayPalPayment = () => {
  const PAYPAL_URL = 'http://localhost:3001/payment'
  const { cart } = useCart()
  const createOrder = (data) => {
    // Order is created on the server and the order id is returned
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
    // Order is captured on the server and the response is returned to the browser
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
    <PayPalButtons
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  )
}

export default PayPalPayment
