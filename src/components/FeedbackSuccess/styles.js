
import styled from 'styled-components'

import { Type, Buttons } from 'styles'
import Link from 'components/Link/Link'
import ButtonSecondary from 'components/ButtonSecondary/ButtonSecondary'

export const FeedbackSuccessComponent = styled.div`
  height: 64vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const H1 = styled.h1`
  margin-bottom: 10px;
`

export const P = styled.p`
  ${Type.body10};
`

export const Button = styled(ButtonSecondary)`
  align-self: flex-start;
  margin-top: 40px;
`
