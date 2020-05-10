
import styled, { keyframes, css } from 'styled-components'

import { price } from 'styles/Type'
import PricingFeature from 'components/PricingFeature/PricingFeature'
import Button from 'components/Button/Button'
import ButtonSecondary from 'components/ButtonSecondary/ButtonSecondary'
import { Breakpoints, Colors, Type } from 'styles'

const animatedGradients = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const FeedbackTierComponent = styled.div`
  --borderWidth: 6px;
  padding: 38px 44px 27px 44px;
  box-sizing: border-box;
  position: relative;
  background: ${Colors.blue20};
  width: 100%;
  max-width: 370px;
  height: auto;
  border-radius: 7px;
  box-shadow: 0 3px 13px rgba(0, 0, 0, 0.2), -1px -1px 0px #21383D;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  ${props => props.large && css`
    box-shadow: none;

    :after {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      height: calc(100% + 4px);
      width: calc(100% + 4px);
      background: linear-gradient(60deg, ${Colors.rainbowGreen}, ${Colors.rainbowBlue}, ${Colors.rainbowIndigo}, ${Colors.rainbowViolet});
      border-radius: calc(1.5 * var(--borderWidth));
      z-index: -1;
      animation: ${animatedGradients} 7s ease alternate infinite;
      background-size: 300% 300%;
      transition: opacity 1s ease;
      box-shadow: 0px 3px 13px rgba(0, 0, 0, 0.5);
    }
  `}

  @media(min-width: ${Breakpoints.pricingTiers}) {
    width: ${props => props.large ? '370px' : '320px'};
    height: ${props => props.large ? '550px' : '500px'};
    padding: 38px 44px 27px 44px;
    margin-bottom: 0;
  }
`

export const Title = styled.h2`
  text-align: center;
  font-size: 15px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-weight: ${Type.fontWeights.medium};
  color: ${Colors.text20}; 
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${Type.fontWeights.medium};
  margin-bottom: 24px;
`

export const Dollar = styled.div`
  font-size: 38px;
`

export const Amount = styled.div`
  ${price};
  margin-left: 8px;
  margin-right: 11px;
`

export const Currency = styled.p`
  color: ${Colors.text10};
  opacity: 0.6;
  font-size: 20px;
  font-weight: ${Type.fontWeights.medium};
`
export const Features = styled.div`
  margin-bottom: 40px;
`

export const Cta = styled(Button)`
  margin-top: auto;
`

export const SecondaryCta = styled(ButtonSecondary)`
  margin-top: auto;
`

export const StyledPricingFeature = styled(PricingFeature)``
