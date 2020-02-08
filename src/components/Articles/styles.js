
import styled from 'styled-components'

import { Breakpoints, Colors } from 'styles'

export const ArticlesComponent = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    margin-bottom: 34px;
    padding-bottom: 34px;
    border-bottom: 1px solid ${Colors.blue30};

    &:last-child {
      border: 0;
    }

    @media(min-width: ${Breakpoints.mobile}) {
      margin-bottom: 49px;
      padding-bottom: 49px;
    }
  }
`

export const Title = styled.h1`
  margin-top: 25px;
  margin-bottom: 50px;
  color: ${Colors.text10};

  @media(max-width: ${Breakpoints.mobile}) {
    margin: 30px 0 34px 0;
  }
`
