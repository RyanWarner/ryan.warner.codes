
import styled from 'styled-components'

import { Breakpoints } from 'styles'

export const FeedbackPricingComponent = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */

  /* @media(min-width: ${Breakpoints.pricingTiers}) {
    flex-direction: row;
  } */
`

export const StyledFeedbackTier = styled.div`
  z-index: 1;
  margin: 0 -20px;
`
