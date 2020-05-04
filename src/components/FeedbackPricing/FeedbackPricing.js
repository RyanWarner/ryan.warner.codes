import React from 'react'

import * as S from './styles'
import pricingData from './pricingData'
import { FeedbackTier } from 'components'

const FeedbackPricing = props =>
  <S.FeedbackPricingComponent>
    <FeedbackTier {...pricingData.small} />
    <S.StyledFeedbackTier>
      <FeedbackTier {...pricingData.medium} large />
    </S.StyledFeedbackTier>
    <FeedbackTier
      {...pricingData.large}
      hideCurrency
    />
  </S.FeedbackPricingComponent>

export default FeedbackPricing
