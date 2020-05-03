import React from 'react'

import * as S from './styles'
import pricingData from './pricingData'
import { FeedbackTier } from 'components'

const FeedbackPricing = props =>
  <S.FeedbackPricingComponent>
    <FeedbackTier {...pricingData.small} />
    <S.StyledFeedbackTier {...pricingData.medium} />
    <FeedbackTier
      {...pricingData.large}
      hideCurrency
    />
  </S.FeedbackPricingComponent>

export default FeedbackPricing
