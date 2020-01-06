
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
  margin-top: 25px;
  color: ${Colors.text10};

  @media(max-width: ${Breakpoints.mobile}) {
    margin: 30px 0 34px 0;
  }
`
