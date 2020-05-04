
import styled from 'styled-components'

import { Buttons, Colors, Type } from 'styles'

export const ButtonComponent = styled.button`
  ${Buttons.primary};
  background-color: ${Colors.glow20};
  color: ${Colors.blue00};
  font-weight: ${Type.fontWeights.bold};
  font-size: 20px;
  padding: 12px 20px;
`
