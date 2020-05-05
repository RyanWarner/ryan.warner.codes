
import styled from 'styled-components'

import { Breakpoints, Colors, Type } from 'styles'

export const FeedbackComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  margin: 60px 00;
  max-width: 640px;

  @media(min-width: ${Breakpoints.mobile}) {
    margin: 100px 0;
  }
`

export const Title = styled.h1`
  text-align: center;
  margin: 0 0 16px 0;
`

export const Description = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: ${Type.fontWeights.medium};
  color: ${Colors.text20};
`
