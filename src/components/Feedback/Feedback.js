import React from 'react'
import { useStripe } from '@stripe/react-stripe-js'

import * as S from './styles'
import withStripe from '../withStripe/withStripe'

const SKU_FEEDBACK = process.env.SKU_FEEDBACK
const successUrl = `${process.env.URL}/feedback-success`
const cancelUrl = `${process.env.URL}/feedback`

const Feedback = props => {
  const stripe = useStripe()

  const checkout = async () => {
    const { error } = await stripe.redirectToCheckout({
      items: [{
        sku: SKU_FEEDBACK,
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
    <S.FeedbackComponent>
      <button onClick={checkout}>
        Buy
      </button>
    </S.FeedbackComponent>
  )
}

export default withStripe(Feedback)
