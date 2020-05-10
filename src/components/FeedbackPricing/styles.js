
import styled from 'styled-components'

import { Breakpoints } from 'styles'

export const FeedbackPricingComponent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  align-items: flex-start;

  @media(min-width: ${Breakpoints.mobile}) {
    align-items: center;
  }

  @media(min-width: ${Breakpoints.pricingTiers}) {
    flex-direction: row;
    justify-content: center;
  }
`

export const StyledFeedbackTier = styled.div`
  z-index: 1;
  margin: 0 -20px;

  @media(max-width: ${Breakpoints.pricingTiers}) {
    width: 100%;
    max-width: 370px;
    order: 1;
    margin: 0;
  }
`
