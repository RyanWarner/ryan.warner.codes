
import styled from 'styled-components'

import { Breakpoints, Colors } from 'styles'

export const ArticlesComponent = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    margin-bottom: 68px;

    @media(min-width: ${Breakpoints.mobile}) {
      margin-bottom: 98px;
    }
  }
`

export const Title = styled.h1`
  margin: 25px 0 54px 0;
  color: ${Colors.text10};
`
