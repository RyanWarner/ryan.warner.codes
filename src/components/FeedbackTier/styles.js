
import styled from 'styled-components'

import { price } from 'styles/Type'
import PricingFeature from 'components/PricingFeature/PricingFeature'
import { Colors, Type } from 'styles'

export const FeedbackTierComponent = styled.div`
  padding: 27px 44px;
  box-sizing: border-box;
  position: relative;
  background-color: ${Colors.blue20}; 
  width: 322px;
  height: 540px;
  border-radius: 6px;
  box-shadow: 4px 4px 44px rgba(0, 0, 0, 0.25), 3px 3px 13px rgba(0, 0, 0, 0.2), -1px -1px 0px #21383D;
`

export const Title = styled.h2`
  text-align: center;
  font-size: 26px;
  font-weight: ${Type.fontWeights.regular};
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Dollar = styled.div`
  font-size: 38px;
`

export const Amount = styled.div`
  ${price};
`

export const Currency = styled.p`
  color: ${Colors.text10};
  opacity: 0.6;
  font-size: 20px;
  font-weight: ${Type.fontWeights.medium};
`
export const Features = styled.div``
export const Cta = styled.div``
export const StyledPricingFeature = styled(PricingFeature)``
