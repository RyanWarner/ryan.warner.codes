import React from 'react'
import { useStripe } from '@stripe/react-stripe-js'

import withStripe from 'components/withStripe/withStripe'

const successUrl = `${process.env.URL}/feedback-success`
const cancelUrl = `${process.env.URL}/feedback`

const TestCheckout = props => {
  const stripe = useStripe()

  const checkout = async (sku) => {
    const { error } = await stripe.redirectToCheckout({
      items: [{
        sku: 'sku_HFtbb29i5ZbBVk',
        quantity: 1
      }],
      successUrl,
      cancelUrl
    })

    if (error) {
      console.warn('Error: ', error)
    }
  }
  return (
    <button onClick={checkout}>
      Purchase test for $1
    </button>
  )
}

export default withStripe(TestCheckout)
