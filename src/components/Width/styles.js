import styled from 'styled-components'

import { Breakpoints, Sizes } from '../../styles'

export const Width = styled.div`
  width: 100%;
  max-width: ${Sizes.maxWidth};
  padding: 0 ${Sizes.xPadding};
  box-sizing: border-box;

  @media(max-width: ${Breakpoints.mobile}) {
    padding: 0 6vw;
  }
`
