import React from 'react'
import { useStripe } from '@stripe/react-stripe-js'

import * as S from './styles'
import withStripe from '../withStripe/withStripe'

const SKU_FEEDBACK = process.env.SKU_FEEDBACK

const Feedback = props => {
  const stripe = useStripe()

  const checkout = async () => {
    const { error } = await stripe.redirectToCheckout({
      items: [{
        sku: SKU_FEEDBACK, quantity: 1
      }],
      successUrl: 'http://localhost:8000/page-2/',
      cancelUrl: 'http://localhost:8000/'
    })

    if (error) {
      console.warn('Error: ', error)
    }
  }

  return (
    <S.FeedbackComponent>
      <button onClick={checkout}>
        Buy
      </button>
    </S.FeedbackComponent>
  )
}

export default withStripe(Feedback)
