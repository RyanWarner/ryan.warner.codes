
import styled from 'styled-components'
import { MoreHorizontal } from 'react-feather'

import { Breakpoints, Colors, Type, Sizes } from 'styles'

export const MobileNavButtonComponent = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: transparent;
  color: ${Colors.text20};
  border: 0;

  @media(min-width: ${Breakpoints.mobile}) {
    display: none;
  }
`

export const StyledMenu = styled(MoreHorizontal)`
  border: 1px solid ${Colors.blue30};
  border-radius: 6px;
  padding: 3px 6px;
`
