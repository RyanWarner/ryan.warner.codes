import React from 'react'
import { useStripe } from '@stripe/react-stripe-js'

import * as S from './styles'
import pricingData from './pricingData'
import { FeedbackTier } from 'components'
import withStripe from '../withStripe/withStripe'

const successUrl = `${process.env.URL}/feedback-success`
const cancelUrl = `${process.env.URL}/feedback`

const FeedbackPricing = props => {
  const stripe = useStripe()

  const checkout = async (sku) => {
    const { error } = await stripe.redirectToCheckout({
      items: [{
        sku,
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
    <S.FeedbackPricingComponent>
      <FeedbackTier {...pricingData.small} onCtaClick={checkout} />
      <S.StyledFeedbackTier>
        <FeedbackTier {...pricingData.medium} large onCtaClick={checkout} />
      </S.StyledFeedbackTier>
      <FeedbackTier
        {...pricingData.large}
        hideCurrency
      />
    </S.FeedbackPricingComponent>
  )
}

export default withStripe(FeedbackPricing)
