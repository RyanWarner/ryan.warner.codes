import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const pk = process.env.STRIPE_PUBLISHABLE_KEY
const stripePromise = loadStripe(pk)

export default WrappedComponent => {
  return props => {
    return (
      <Elements stripe={stripePromise}>
        <WrappedComponent
          {...props}
        />
      </Elements>
    )
  }
}
