
import styled from 'styled-components'

import { Buttons, Colors, Type } from 'styles'

export const SecondaryButtonComponent = styled.button`
  ${Buttons.primary};
  background-color: ${Colors.blue30};
  color: ${Colors.text20};
  font-weight: ${Type.fontWeights.medium};
  font-size: 18px;
  padding: 12px 20px;
`
