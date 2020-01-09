
import styled from 'styled-components'

import { Breakpoints, Colors } from 'styles'

export const ReadMoreComponent = styled.p`
  color: ${Colors.blue50};
  margin-top: 15px;
  display: block;
  transition: all 200ms ease;

  &:hover {
    color: ${Colors.text10};
  }

  @media(min-width: ${Breakpoints.mobile}) {
    margin-top: 25px;
  }
`
